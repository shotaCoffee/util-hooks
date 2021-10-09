/* eslint-disable  @typescript-eslint/no-explicit-any */
type MessageObj = any;

interface UseSlack {
  postMessage: (messageObj: MessageObj) => Promise<void>
}

const useSlack = (slackUrl: string): UseSlack => {

  // NOTE messageObj https://api.slack.com/block-kit/building
  const postMessage = async (messageObj: MessageObj) => {
    await fetch(slackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify(messageObj)
    })
  }

  return {
    postMessage
  }
}

export default useSlack
