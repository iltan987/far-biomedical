"use client";

import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

type LayoutType = "list" | "2-col" | "3-col";

interface UseInstrumentsLayoutProps {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  layouts: LayoutType[];
}

interface InstrumentsLayoutProviderProps {
  children: React.ReactNode;
  defaultLayout?: LayoutType;
  storageKey?: string;
  attribute?: string;
}

const VALID_LAYOUTS: LayoutType[] = ["list", "2-col", "3-col"];

const InstrumentsLayoutContext = createContext<
  UseInstrumentsLayoutProps | undefined
>(undefined);

const defaultContext: UseInstrumentsLayoutProps = {
  layout: "2-col",
  setLayout: () => {},
  layouts: VALID_LAYOUTS,
};

export const useInstrumentsLayout = () =>
  useContext(InstrumentsLayoutContext) ?? defaultContext;

export const InstrumentsLayoutProvider = (
  props: InstrumentsLayoutProviderProps
) => {
  const context = useContext(InstrumentsLayoutContext);

  // Ignore nested context providers, just passthrough children
  if (context) return <>{props.children}</>;
  return <InstrumentsLayout {...props} />;
};

// Create storage subscription outside component to maintain stable reference
function createStorageSubscribe(storageKey: string) {
  return (callback: () => void) => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === storageKey || e.key === null) {
        callback();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  };
}

const InstrumentsLayout = ({
  children,
  defaultLayout = "2-col",
  storageKey = "instruments-layout-preference",
  attribute = "data-instruments-layout",
}: InstrumentsLayoutProviderProps) => {
  const subscribe = useMemo(
    () => createStorageSubscribe(storageKey),
    [storageKey]
  );

  const getSnapshot = useCallback((): LayoutType => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored && VALID_LAYOUTS.includes(stored as LayoutType)) {
        return stored as LayoutType;
      }
    } catch {
      // Unsupported
    }
    return defaultLayout;
  }, [storageKey, defaultLayout]);

  const getServerSnapshot = useCallback(
    (): LayoutType => defaultLayout,
    [defaultLayout]
  );

  const layout = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLayout = useCallback(
    (value: LayoutType) => {
      try {
        localStorage.setItem(storageKey, value);
        // Trigger storage event for this window
        window.dispatchEvent(new StorageEvent("storage", { key: storageKey }));
      } catch {
        // Unsupported
      }
    },
    [storageKey]
  );

  // Apply layout to DOM
  useEffect(() => {
    document.documentElement.setAttribute(attribute, layout);
  }, [layout, attribute]);

  const providerValue = useMemo(
    () => ({
      layout,
      setLayout,
      layouts: VALID_LAYOUTS,
    }),
    [layout, setLayout]
  );

  return (
    <InstrumentsLayoutContext.Provider value={providerValue}>
      <InstrumentsLayoutScript
        storageKey={storageKey}
        attribute={attribute}
        defaultLayout={defaultLayout}
      />
      {children}
    </InstrumentsLayoutContext.Provider>
  );
};

const InstrumentsLayoutScript = memo(
  ({
    storageKey,
    attribute,
    defaultLayout,
  }: {
    storageKey: string;
    attribute: string;
    defaultLayout: string;
  }) => {
    const scriptArgs = JSON.stringify([
      storageKey,
      attribute,
      defaultLayout,
      VALID_LAYOUTS,
    ]).slice(1, -1);

    return (
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `(${script.toString()})(${scriptArgs})`,
        }}
      />
    );
  }
);

InstrumentsLayoutScript.displayName = "InstrumentsLayoutScript";

// Script that runs before React hydration
function script(
  storageKey: string,
  attribute: string,
  defaultLayout: string,
  validLayouts: string[]
) {
  try {
    const stored = localStorage.getItem(storageKey);
    const layout =
      stored && validLayouts.includes(stored) ? stored : defaultLayout;
    document.documentElement.setAttribute(attribute, layout);
  } catch {
    document.documentElement.setAttribute(attribute, defaultLayout);
  }
}

