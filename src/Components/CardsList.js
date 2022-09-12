import { TbDotsCircleHorizontal } from "react-icons/tb";
import { BsCheck2, BsShare, BsEye } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { VscCircleSlash } from "react-icons/vsc";
import { MdOutlineModeComment } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import png from "../Assets/no-post-image.png";

const CardsList = ({ info }) => {
  const color = {
    0: "#acacac",
    1: "#3ac183",
    2: "#f7bf38",
    3: "#fb6450",
    4: "#67b1f2",
  };

  const logo = {
    facebook: FaFacebookF,
    twitter: AiOutlineTwitter,
    instagrambusiness: AiOutlineInstagram,
  };

  const date = new Date(info.published_at).toDateString();
  const TheIcon = logo[info.account.channel];

  return (
    <div className="flex mr-8">
      <div className="border flex w-72 rounded">
        <a
          href={info.link ? info.link : info.account.link}
          style={{ backgroundColor: color[info.status] }}
          className="flex w-8 rounded justify-center items-center"
        >
          <div className="text-xl text-white">
            <TheIcon />
          </div>
        </a>
        <div className="p-3 w-full">
          <div className="flex flex-column w-full h-6 justify-between">
            <span className="text-sm text-gray-400">{date}</span>
            <div className="flex flex-column text-gray-400 w-16 justify-between">
              {info.is_published ? <BsCheck2 /> : <VscCircleSlash />}
              <RiDeleteBin6Line />
              <TbDotsCircleHorizontal />
            </div>
          </div>
          <p className="text-xs text-gray-600">{info.entry.message}</p>
          <img className="object-fit h-48 mt-2" src={info.entry.image} alt="" />
          <div className="flex flex-column mt-4 justify-between w-44 items-center text-gray-400 text-sm">
            <BiLike className="mr-1" />{" "}
            <span className="mr-4 text-gray-600"> 0</span>
            <MdOutlineModeComment className="mr-1" />{" "}
            <span className="mr-4 text-gray-600"> 0</span>
            <BsShare className="mr-1" />{" "}
            <span className="mr-4 text-gray-600"> 0</span>
            <BsEye className="mr-1" />{" "}
            <span className="mr-4 text-gray-600"> 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsList;
