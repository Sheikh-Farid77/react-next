import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = function MyInput(props, ref) {
  const myRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      myRef.current.focus();
    },
  }));
  return <input {...props} ref={myRef} />;
};

const forwardedMyInput = forwardRef(MyInput);

export default forwardedMyInput;
