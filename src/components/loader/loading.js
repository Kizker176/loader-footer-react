import React from 'react'
import { ThreeCircles, BallTriangle, Blocks, CirclesWithBar, Triangle, ThreeDots, TailSpin, Circles, ColorRing, Grid, RotatingLines, LineWave, Oval, ProgressBar } from 'react-loader-spinner'


const Loader = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row ">
                    <div className="col text-center">
                        <ThreeCircles
                            height="70"
                            width="70"
                            color="#61dafb"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                            position="absolute"
                        />
                    </div>
                    <div className="col">
                        <BallTriangle
                            height={70}
                            width={70}
                            radius={5}
                            color="#61dafb"
                            ariaLabel="ball-triangle-loading"
                            wrapperClass={{}}
                            wrapperStyle=""
                            visible={true}
                        />
                    </div>
                    <div className="col">
                        <Blocks
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                        />
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <CirclesWithBar
                            height="100"
                            width="100"
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            outerCircleColor=""
                            innerCircleColor=""
                            barColor=""
                            ariaLabel='circles-with-bar-loading'
                        />
                    </div>
                    <div className="col">
                        <Circles
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    <div className="col">
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Grid
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    <div className='col'>
                        <LineWave
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="line-wave"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            firstLineColor=""
                            middleLineColor=""
                            lastLineColor=""
                        />
                    </div>
                    <div className='col'>
                        <Oval
                            ariaLabel="loading-indicator"
                            height={100}
                            width={100}
                            strokeWidth={5}
                            strokeWidthSecondary={1}
                            color="blue"
                            secondaryColor="white"
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ProgressBar
                            height="80"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor='#F4442E'
                            barColor='#51E5FF'
                        />
                    </div>
                    <div className='col'>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>
                    <div className='col'>
                        <TailSpin
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                    <div className='col'>
                        <Triangle
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader
