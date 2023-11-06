import Image from "next/image";
import { ImageBlockProps } from "./interface";

const IImage = (props: ImageBlockProps) => {
  return (
    <div className={`flex-col-center ${props.className}`}>
      <div
        className={`
                    relative text-[0] w-full
                    ${props.fitToContainer ? "h-[16rem]" : ""}
                `}
      >
        {props.fitToContainer ? (
          <Image
            src={props.imageBlock.src}
            alt={props.imageBlock.alt || ""}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src={props.imageBlock.src}
            alt={props.imageBlock.alt || ""}
            width={props.imageBlock.width ?? 1024}
            height={props.imageBlock.height ?? 640}
            // objectFit="contain"
          />
        )}
      </div>

      {props.imageBlock.showCaption && props.imageBlock.caption && (
        <p>{props.imageBlock.caption}</p>
      )}
    </div>
  );
};

export default IImage;
