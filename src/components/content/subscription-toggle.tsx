import { getSiteContent } from '@/lib/api/content';
import { getSubscriptionStatus } from '@/lib/utils/subscription-status';
import { Suspense } from 'react';
import Spinner from '../ui/spinner';
import { SubscriptionButton } from '../ui/subscription-button';

export const SubscriptionToggle = async () => {
  const isSubscribed = await getSubscriptionStatus();
  const { subscription } = await getSiteContent()
  const { button } = subscription

  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 py-10">
          <Spinner trackColor="black" strokeColor="black" size="sm" />
        </div>
      }
    >
      <SubscriptionButton isSubscribed={isSubscribed}>
         {!isSubscribed ? button.subscribeLabel : button.unsubscribeLabel}
      </SubscriptionButton>
    </Suspense>
  )
}
