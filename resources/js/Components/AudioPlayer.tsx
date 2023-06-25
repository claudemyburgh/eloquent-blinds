import React, { FC, MutableRefObject, useEffect, useRef, useState } from "react"
import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid"

const AudioPlayer: FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const audioPlayer: MutableRefObject<any> = useRef()

  function convertSeconds(seconds: number = 0): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString()
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds.toString()
    if (isNaN(seconds)) {
      return "0 : 00"
    } else {
      return `${minutes} : ${formattedSeconds}`
    }
  }

  useEffect(() => {
    setDuration(Math.floor(audioPlayer.current.duration))
    setCurrentTime(Math.floor(audioPlayer?.current?.currentTime))
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, audioPlayer?.current?.currentTime])

  function togglePlay(): void {
    const previousPlaying = isPlaying
    setIsPlaying(!previousPlaying)
    if (!previousPlaying) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }

  return (
    <div className={`my-6`}>
      <audio ref={audioPlayer} controls={false} className={`h-20 w-full max-w-2xl`}>
        <source src={src} type={`audio/wav`} />
      </audio>
      <div className={`flex items-center w-full max-w-2xl border border-primary-500 rounded-lg`}>
        <button type={`button`} onClick={togglePlay} className={`p-2.5  rounded-lg bg-primary-500 text-white`}>
          {isPlaying ? <PauseIcon className={`h-4 w-4 `} /> : <PlayIcon className={`h-4 w-4 `} />}
        </button>
        <div className="flex flex-1 text-xs justify-between px-4">
          <div>{convertSeconds(currentTime)}</div>
          <div>{convertSeconds(duration)}</div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
