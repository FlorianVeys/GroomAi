export type StartupPointIdentifier = {
  type: "id";
  value: string;
};

export type StartupPointAction = {
  type: "translate";
  arguments: Record<string, unknown>;
};

export type StartupPoint = {
  type: string;
  identifier: StartupPointIdentifier;
  actions: StartupPointAction[];
};

export type StartupPointElement = StartupPoint & { element: HTMLElement };
