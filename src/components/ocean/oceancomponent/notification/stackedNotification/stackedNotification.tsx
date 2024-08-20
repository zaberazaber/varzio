import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const StackedNotifications = () => {
  const [notification, setNotification] = useState<NotificationType | null>(
    null
  );

  const removeNotif = () => {
    setNotification(null);
  };

  return (
    <div className="bg-rose-900 min-h-[200px] flex items-center justify-center">
      <button
        onClick={() => {
          setNotification(generateRandomNotif());
        }}
        className="text-sm text-white bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all font-medium px-3 py-2 rounded"
      >
        Add notification
      </button>
      <AnimatePresence>
        {notification && (
          <Notification
            removeNotif={removeNotif}
            key={notification.id}
            {...notification}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

type NotificationType = {
  id: number;
  text: string;
};

const Notification = ({
  text,
  id,
  removeNotif,
}: NotificationType & { removeNotif: Function }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: 15, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -25, scale: 0.9, opacity: 0 }}
      transition={{ type: "spring" }}
      className="p-4 w-80 flex items-start rounded-lg gap-2 text-sm font-medium shadow-lg text-white bg-rose-600 fixed z-50 bottom-4 right-4"
    >
      <FiAlertCircle className="text-3xl absolute -top-4 -left-4 p-2 rounded-full bg-white text-rose-600 shadow" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default StackedNotifications;

const generateRandomNotif = (): NotificationType => {
  const names = [
    "Ady",
    "Zaberazaber",
    "Modi",
    "Dani Daniels",
    "Glarik",
    "Jhonny Sins",
    "Alex",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);

  const data: NotificationType = {
    id: Math.random(),
    text: `New notification from ${names[randomIndex]}`,
  };

  return data;
};