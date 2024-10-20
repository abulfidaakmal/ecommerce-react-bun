import { toast } from "sonner";
import { modal } from "../../utils/handleModal";
import { Copy, Mail, Share2 } from "lucide-react";
import TelegramIcons from "../icons/TelegramIcons";
import WhatsAppIcons from "../icons/WhatsAppIcons";

const ModalShare = ({ merchantName }) => {
  const shareUrl = `${window.location.origin}/merchant/${encodeURIComponent(
    merchantName
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      toast.info("Link copied to clipboard!");
    });

    modal("Modal_Share").close();
  };

  const handleEmailShare = () => {
    const emailSubject = encodeURIComponent("Check out this shop");
    const emailBody = encodeURIComponent(`Here is the link: ${shareUrl}`);

    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;

    modal("Modal_Share").close();
  };

  const handleWhatsAppShare = () => {
    const whatsappMessage = encodeURIComponent(
      `Check out this shop: ${shareUrl}`
    );
    window.open(`https://wa.me/?text=${whatsappMessage}`, "_blank");

    modal("Modal_Share").close();
  };

  const handleTelegramShare = () => {
    const telegramMessage = encodeURIComponent(
      `Check out this shop: ${shareUrl}`
    );
    window.open(`https://t.me/share/url?url=${telegramMessage}`, "_blank");

    modal("Modal_Share").close();
  };

  const shares = [
    {
      fun: handleEmailShare,
      icons: <Mail />,
      title: "Email",
    },
    {
      fun: handleWhatsAppShare,
      icons: <WhatsAppIcons />,
      title: "WhatsApp",
    },
    {
      fun: handleTelegramShare,
      icons: <TelegramIcons />,
      title: "Telegram",
    },
    {
      fun: handleCopyLink,
      icons: <Copy />,
      title: "Copy Link",
    },
  ];

  return (
    <>
      <button
        className="flex items-center gap-1"
        onClick={modal("Modal_Share").open}
        aria-haspopup="dialog"
        aria-controls="Modal_Share"
      >
        <Share2 />
        Share Shop
      </button>
      <dialog
        id="Modal_Share"
        className="modal"
        aria-labelledby="modal-title"
        role="dialog"
      >
        <div className="relative modal-box">
          <button
            type="button"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={modal("Modal_Share").close}
            aria-label="Close"
          >
            ✕
          </button>
          <h2 id="modal-title" className="text-lg font-bold">
            Share This Shop
          </h2>
          <div className="flex mt-3 md:mt-4 justify-evenly">
            {shares.map((share, index) => (
              <div className="flex flex-col items-center gap-2" key={index}>
                <button className="p-4 w-max h-max btn" onClick={share.fun}>
                  {share.icons}
                </button>
                <span className="text-sm md:text-base">{share.title}</span>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalShare;
