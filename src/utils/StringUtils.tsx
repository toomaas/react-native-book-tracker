const StringUtils = {
  /**
   * Returns the name and value of each object key in uri string format
   *
   * @param {object} searchParamsObj object with query params
   * @returns {string} resulted joined string
   */
  getSearchParamsStringFromObj: (searchParamsObj: object): string => {
    const searchParamsString = Object.keys(searchParamsObj)
      .map((key: string) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          // @ts-ignore
          searchParamsObj[key],
        )}`;
      })
      .join('&');

    return searchParamsString;
  },
};

export default StringUtils;
