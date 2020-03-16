// to have the notifier function available across the application

export default ({ app, store }, inject) => {
  inject('notifier', {
    setCurrentSnackBar(currentSnackBar) {
      store.commit('snackbar/setCurrentSnackBar', currentSnackBar);
    }
  });
};
