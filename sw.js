self.addEventListener("push", () => {
  self.ServiceWorkerRegistration.sendNotification("text title", {});
});
