import { z } from "zod";

export const StartupPointIdentifier$ = z.object({
  type: z.enum(["id"]),
  value: z.string(),
});
export type StartupPointIdentifier = z.infer<typeof StartupPointIdentifier$>;

export const StartupPointAction$ = z.object({
  type: z.enum(["translate"]),
  arguments: z.record(z.unknown()),
});
export type StartupPointAction = z.infer<typeof StartupPointAction$>;

export const StartupPoint$ = z.object({
  type: z.enum(["input"]),
  identifier: StartupPointIdentifier$,
  actions: z.array(StartupPointAction$),
});
export type StartupPoint = z.infer<typeof StartupPoint$>;

export type StartupPointElement = StartupPoint & { element: HTMLElement };
