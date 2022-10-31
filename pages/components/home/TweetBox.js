import { useState } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import ProfilePic from './ProfilePic.jpg'
const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
}  
const TweetBox = () => {
    //console.log(ProfilePic);
    const [tweetMessage,setTweetMessage] = useState('');
    //console.log(tweetMessage);
    const postTweet = (event) =>{
        event.preventDefault();
        console.log(tweetMessage);
        setTweetMessage('');
    }
    return (
        <div className={style.wrapper}>
            <div className={style.tweetBoxLeft}>
                <img 
                    //src={require("./ProfilePic.jpg")}
                    src={ProfilePic.src}
                    alt="profile img"
                    className={style.profileImage}
                />
            </div>
            <div className={style.tweetBoxRight}>
                <form>
                    <textarea 
                        className={style.inputField} 
                        placeholder="What's Happening?"
                        value={tweetMessage}
                        onChange={(e)=>setTweetMessage(e.target.value)}
                    />
                    <div className={style.formLowerContainer}>
                        <div className={style.iconsContainer}>
                        <div className={style.iconsContainer}>
                            <BsCardImage className={style.icon} />
                            <RiFileGifLine className={style.icon} />
                            <RiBarChartHorizontalFill className={style.icon} />
                            <BsEmojiSmile className={style.icon} />
                            <IoMdCalendar className={style.icon} />
                            <MdOutlineLocationOn className={style.icon} />
                        </div>
                        </div>
                        <button
                                type="submit"
                                onClick={(event)=>postTweet(event)}
                                className={`${style.submitGeneral} ${tweetMessage?style.activeSubmit:style.inactiveSubmit}`}
                        > tweet </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default TweetBox