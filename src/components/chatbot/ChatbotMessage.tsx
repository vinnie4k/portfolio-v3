import { ChatMessage } from "@/models/interfaces";
import { motion } from "framer-motion";

interface Props {
  msg: ChatMessage;
}

export default function ChatbotMessage({ msg }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {msg.user !== "" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex flex-col items-end"
        >
          <p className="b2 font-normal p-4 bg-primary-200 dark:bg-primary-700 rounded-2xl max-w-fit text-right text-neutral-900 dark:text-neutral-100">
            {msg.user}
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex flex-col items-start"
      >
        <p className="b2 font-normal p-4 border border-primary-300 dark:border-primary-700 rounded-2xl max-w-fit text-neutral-900 dark:text-neutral-100">
          {msg.bot}
        </p>
      </motion.div>
    </div>
  );
}
