import { Observable } from "./observable";
import { ToastProps } from "./components/Toast";

type Events = {
  type: "ADD TOAST" | "REMOVE ALL";
  toast?: Pick<ToastProps, "id" | "message" | "variant">;
};

export const observable = new Observable<Events>();

observable.subscribe((data) => {
  if (data.type === "ADD TOAST") {
    if (data.toast) {
      console.log(`Toast added: ${data.toast.message}`);
    }
  } else if (data.type === "REMOVE ALL") {
    console.log("All toasts removed");
  }
});

export function toast(message: string) {
  observable.notify({
    type: "ADD TOAST",
    toast: { id: Math.random(), message },
  });
}

toast.success = (message: string) => {
  observable.notify({
    type: "ADD TOAST",
    toast: { id: Math.random(), message, variant: "success" },
  });
};

toast.error = (message: string) => {
  observable.notify({
    type: "ADD TOAST",
    toast: { id: Math.random(), message, variant: "error" },
  });
};

toast.dismissAll = () => {
  observable.notify({ type: "REMOVE ALL" });
};
