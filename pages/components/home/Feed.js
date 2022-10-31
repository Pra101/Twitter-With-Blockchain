import {BsStars} from 'react-icons/bs'
import Post from './../Post.js'
import ProfilePic from './ProfilePic.jpg'
import TweetBox from './TweetBox'
const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}
const tweets = [
    {
        displayName:'Prahald',
        userName:'0x6KJH87JH5762JHGJGU',
        avatar:ProfilePic.src,
        text:"gm",
        isProfileImageNft: true,
        timeStamp:'2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Prahald',
        userName:'0x6KJH87JH5762JHGJGU',
        avatar:ProfilePic.src,
        text:"gm",
        isProfileImageNft: false,
        timeStamp:'2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Prahald',
        userName:'0x6KJH87JH5762JHGJGU',
        avatar:ProfilePic.src,
        text:"gm",
        isProfileImageNft: true,
        timeStamp:'2020-06-01T12:00:00.000Z'
    },
    {
        displayName:'Prahald',
        userName:'0x6KJH87JH5762JHGJGU',
        avatar:ProfilePic.src,
        text:"gm",
        isProfileImageNft: false,
        timeStamp:'2020-06-01T12:00:00.000Z'
    },{
        displayName:'Prahald',
        userName:'0x6KJH87JH5762JHGJGU',
        avatar:ProfilePic.src,
        text:"gm",
        isProfileImageNft: false,
        timeStamp:'2020-06-01T12:00:00.000Z'
    },{
        displayName:'Prahald',
        userName:'0x6KJH87JH5762JHGJGU',
        avatar:ProfilePic.src,
        text:"gm",
        isProfileImageNft: false,
        timeStamp:'2020-06-01T12:00:00.000Z'
    }
]
const Feed = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars/>
            </div>
            <TweetBox/>
            {
                tweets.map((tweet,index)=>{
                    return (
                        <Post
                            key={index}
                            displayName={tweet.displayName}
                            userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                            avatar={tweet.avatar}
                            text={tweet.text}
                            isProfileImageNft={tweet.isProfileImageNft}
                            timeStamp={tweet.timeStamp}
                        />
                    )
                })
            }
        </div>
    )
}
export default Feed;