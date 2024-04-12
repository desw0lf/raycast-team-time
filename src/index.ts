import { Clipboard, environment, LaunchType, Toast, updateCommandMetadata } from "@raycast/api";

const command = async () => {
  const now = new Date();

  const london = now.toLocaleString(undefined, { timeZone: "Europe/London", timeStyle: "short" });
  const berlin = now.toLocaleString(undefined, { timeZone: "Europe/Berlin", timeStyle: "short" });
  const toronto = now.toLocaleString(undefined, { timeZone: "America/Toronto", timeStyle: "short" });
  const colombo = now.toLocaleString(undefined, { timeZone: "Asia/Colombo", timeStyle: "short" });

  const subtitle = `🇬🇧 ${london}  🇱🇰 ${colombo}  🇨🇦 ${toronto}  🇧🇪🇳🇱🇩🇪🇳🇴🇩🇰🇵🇱 ${berlin}`;
  await updateCommandMetadata({ subtitle });

  if (environment.launchType === LaunchType.UserInitiated) {
    const toast = new Toast({
      style: Toast.Style.Success,
      title: "Refreshed!",
      message: subtitle,
    });
    toast.primaryAction = {
      title: "Copy to Clipboard",
      shortcut: { modifiers: ["cmd", "shift"], key: "c" },
      onAction: () => Clipboard.copy(subtitle),
    };
    await toast.show();
  }
};

export default command;
