import { useState, useEffect } from "react";

const SUBSCRIBED_KEY = "drift_subscribed";
const SUBSCRIBER_EMAIL_KEY = "drift_subscriber_email";

export const useSubscription = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(SUBSCRIBED_KEY);
    const email = localStorage.getItem(SUBSCRIBER_EMAIL_KEY);
    if (saved === "true") {
      setIsSubscribed(true);
    }
    if (email) {
      setSubscriberEmail(email);
    }
  }, []);

  const subscribe = (email?: string) => {
    setIsSubscribed(true);
    localStorage.setItem(SUBSCRIBED_KEY, "true");
    if (email) {
      setSubscriberEmail(email);
      localStorage.setItem(SUBSCRIBER_EMAIL_KEY, email);
    }
  };

  return { isSubscribed, subscriberEmail, subscribe };
};
