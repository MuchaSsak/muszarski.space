import AudioSettingButton from "@/components/AudioSettingButton";
import CreditsDialogButton from "@/components/CreditsDialogButton";
import GraphicsSettingButton from "@/components/GraphicsSettingButton";
import LanguageSettingButton from "@/components/LanguageSettingButton";
import ResetSettingsDialogButton from "@/components/ResetSettingsDialogButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CONTACT_EMAIL,
  GITHUB_AVATAR_LINK,
  GITHUB_LINK,
} from "@/lib/constants";

function TopBar() {
  return (
    <nav className="fixed top-0 left-0 w-screen py-2 px-8 z-50 justify-between flex items-center">
      <div className="flex items-center gap-2.5">
        {/* GitHub avatar link */}
        <a
          target="_blank"
          className="opacity-75 hover:opacity-100 focus-visible:opacity-100 hover:scale-110 focus-visible:scale-110 transition-[opacity,scale]"
          href={GITHUB_LINK}
        >
          <Avatar className="size-6">
            <AvatarImage width={24} height={24} src={GITHUB_AVATAR_LINK} />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
        </a>

        {/* Contact email link */}
        <a
          className="text-muted-foreground text-sm hover:text-foreground transition-colors focus-visible:text-foreground hover:underline focus-visible:underline"
          href={`mailto:${CONTACT_EMAIL}`}
          target="_blank"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Settings buttons */}
        <LanguageSettingButton
          buttonClassName="size-8 p-2 text-xs"
          buttonVariant="outline"
        />
        <GraphicsSettingButton
          buttonClassName="size-8 p-2 focus:outline-red-500! text-xs"
          buttonVariant="outline"
        />
        <AudioSettingButton
          buttonClassName="size-8 p-2 text-xs"
          buttonVariant="outline"
        />
        <CreditsDialogButton />
        <ResetSettingsDialogButton />
      </div>
    </nav>
  );
}

export default TopBar;
