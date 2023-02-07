class SearchView {
  _parentEl = document.querySelector('.search');
  _childEl = this._parentEl.querySelector('.search__field');

  getQuery() {
    return this._childEl.value;
  }
  _clearInputField() {
    this._childEl.value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
