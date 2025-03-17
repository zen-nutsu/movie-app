const colors = {
  backgroundColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#000' : '#fff';
  },
  invertedPrimaryColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#000' : '#fff';
  },
  primaryTextColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#fff' : '#000';
  },
  primaryTextDisabledColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? 'rgb(99, 99, 99)' : 'rgb(182, 181, 181)';
  },
  lightTextPrimaryColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? 'rgb(160, 160, 160)' : 'rgb(30, 30, 30)';
  },
  textColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#fff' : '#000';
  },
  primaryColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#fff' : '#000';
  },
  white: '#fff',
  black: '#000',
  lightWhite: 'rgb(188, 188, 188)',
  lightDark: 'rgb(30, 30, 30)',
  lightTransparent: 'rgba(255, 255, 255, 0.5)',
  darkTransparent: 'rgba(0, 0, 0, 0.5)',
};

export default colors;
