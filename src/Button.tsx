import React, {useState} from 'react';
import {Todolist} from "./Todolist";
import {ManyProps} from "./App";

type ButtontypeProps = {

    filterMany: ManyProps[]
    setName: (name:string)=>void

}

export const Button = (props:ButtontypeProps ) => {
    const onClickHandler = (name: string) => {
        props.setName(name);

    }

    return (
        <div className="App">
            {/*<Todolist title={mainTitle} tasks={tasks} topCars={topCars}/>*/}
            {/*<Todolist title={mainTitle2} tasks={tasks2} topCars={topCars2}/>*/}

            <ul>{
                props.filterMany.map( (m, index:number) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots}</span> ---
                            <span>{m.value}</span> -----
                            <span>{m.number}</span>
                        </li>
                    )

                })
            }
            </ul>
            <button onClick={()=>onClickHandler("all") }>all</button>
            <button onClick={()=>onClickHandler("Dollars") }>dol</button>
            <button onClick={()=>onClickHandler("RUBLS") }>rub</button>

        </div>
    );
};


//
// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader xxx />
//         <VideoContent yyy />
//         <VideoDescription props={props.description} />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );


// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={xxx} />
//         <UserWallet wallet={yyy} />
//     </div>
// }

