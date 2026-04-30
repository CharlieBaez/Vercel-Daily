'use client'

import clsx from "clsx";
import { subscribe, unsubscribe } from '@/app/actions/subscriptions'
import { useTransition } from "react";
import Spinner from "./spinner";

export type SubmitButtonProps = {
  isSubscribed: boolean;
  children: React.ReactNode
}

export const SubscriptionButton = ({isSubscribed, children}: SubmitButtonProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <form action={!isSubscribed ? subscribe : unsubscribe}>
      <button type="submit" className={clsx('relative min-w-25 transition-all rounded-full px-4 py-2 cursor-pointer', {
          'bg-(--dark) text-(--light) hover:opacity-75': !isSubscribed,
          'bg-gray-300 text-(--dark) hover:bg-(--light)': isSubscribed
      })}
      onClick={() => {
        startTransition(subscribe || unsubscribe);
      }}
      >
        {!isPending && children}
        {isPending && (
          <Spinner trackColor={isSubscribed ? 'black' : 'white'} strokeColor={isSubscribed ? 'black' : 'white'} size="xs" />
        )}
      </button>
    </form>
  )

}