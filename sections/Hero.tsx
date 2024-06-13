import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  background?: {
    src?: ImageWidget;
    alt?: string;
  };
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
  background = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9200/68692ac5-5a20-4220-b6f5-c0e248ff00c5",
    alt: "background",
  },
}: Props) {
  return (
    <nav
      class="lg:mx-auto h-[65rem]"
      style={`
      background-image: url(${background ? background.src : ""});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
    >
      <div class="flex flex-col items-center">
        <div
          class={`flex w-full xl:container xl:mx-auto py-10 mx-5 md:mx-10 z-10 
          flex-col items-center justify-center text-center lg:py-15 gap-12 md:gap-20 items-center`}
        >
          <div
            class={`flex flex-col gap-8 mx-6 lg:mx-auto lg:w-full space-y-4 items-center justify-center lg:max-w-[50rem]`}
          >
            <div class="flex flex-col gap-[3rem] lg:text-[80px] text-4xl font-bold tracking-tighter relative mt-15">
              <h1
                class="text-yellow-400 font-bold"
                style="background: linear-gradient(45deg, #FFD700, #FFA500); -webkit-background-clip: text;"
              >
                O ARRAIÁ
              </h1>
              <h1
                class="text-orange-500 font-bold"
                style="text-shadow: 2px 2px 4px #FF4500;"
              >
                É AQUI!
              </h1>
            </div>
            <div class="flex">
              <Image
                class="transform transition-transform duration-300 scale-175 animate-bounce"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9200/44f7f249-83d6-4a52-806c-a635e6ef9a30"
                width={300}
              />
              <p class="text-lg md:text-md leading-[150%] text-white flex items-center font-medium">
                🔥 Prepare-se para uma experiência online inesquecível que
                celebra a tradição e a alegria da nossa querida festa! 🎊
              </p>
            </div>
            <div class="flex">
              <p class="text-lg md:text-md leading-[150%] text-white flex items-center font-medium">
              ✨ Explore nosso arraial virtual, repleto de cores, sabores e
                diversão para toda a família! 👨‍👩‍👧‍👦
              </p>
              <Image
                class="transform transition-transform duration-300 scale-175 animate-bounce"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9200/44f7f249-83d6-4a52-806c-a635e6ef9a30"
                width={300}
              />
            </div>
            <div class="flex">
              <Image
                class="transform transition-transform duration-300 scale-175 animate-bounce"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9200/44f7f249-83d6-4a52-806c-a635e6ef9a30"
                width={300}
              />
              <p class="text-lg md:text-md leading-[150%] text-white flex items-center font-medium">
              🌽 Venha conhecer a celebração da nossa festa ao redor do país e a alegria do nosso povo!
              </p>             
            </div>
            <div class="mt-100">
              <button class="btn">👉 Clique aqui e entre na festa! 🎉</button>
            </div>
            

          </div>
        </div>
      </div>
    </nav>
  );
}
