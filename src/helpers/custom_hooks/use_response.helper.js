import { useRef } from "react";
import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";

const useResponseHelper = () => {
  let { globalDispatch } = useGlobalContext();
  let seconds = 1000 * 10;
  const timeoutFail = useRef(null);
  const timeoutSuccess = useRef(null);

  /**
   * DISPLAY ACTION FAIL RESPONSE
   * @param {string} title default as ACTION DENIED
   * @param {string} message default as Lorem ipsum donor
   */
  const renderFail = ({
    title = "ACTION DENIED",
    message = "Lorem ipsum donor",
  }) => {
    renderTimeoutCancel();

    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setError,
      payload: true,
    });
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setMessage,
      payload: { title: title, message: message },
    });

    timeoutFail.current = setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setError,
        payload: false,
      });
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setMessage,
        payload: { title: "", message: "" },
      });
    }, seconds);
  };

  /**
   * DISPLAY ACTION SUCCESS RESPONSE
   * @param {string} title default as ACTION ACCEPTED
   * @param {string} message default as Lorem ipsum donor
   */
  const renderSucceed = ({
    title = "ACTION ACCEPTED",
    message = "Lorem ipsum donor",
  }) => {
    renderTimeoutCancel();

    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setSuccess,
      payload: true,
    });
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setMessage,
      payload: { title: title, message: message },
    });

    timeoutSuccess.current = setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setSuccess,
        payload: false,
      });
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setMessage,
        payload: { title: "", message: "" },
      });
    }, seconds);
  };

  /**
   * RESET ALL TO DEFAULT RESPONSE TO DEFAULT VALUE
   */
  const renderTimeoutCancel = () => {
    clearTimeout(timeoutFail.current);
    clearTimeout(timeoutSuccess.current);

    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setSuccess,
      payload: false,
    });
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setError,
      payload: false,
    });
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setMessage,
      payload: { title: "", message: "" },
    });
  };

  /**
   * DISPLAY LOADING ANIMATION
   * @param {bool} isBusy requires a boOlean value
   */
  const renderBusy = (isBusy) => {
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setBusy,
      payload: isBusy,
    });
  };

  return { renderFail, renderSucceed, renderBusy, renderTimeoutCancel };
};

export default useResponseHelper;
