const colors = {
  backgroundColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#000' : '#fff';
  },
  invertedColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#fff' : '#000';
  },
  primaryTextColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#fff' : '#000';
  },
  primaryTextDisabledColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? 'rgb(99, 99, 99)' : 'rgb(221, 221, 221)';
  },
  lightTextPrimaryColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? 'rgb(160, 160, 160)' : 'rgb(30, 30, 30)';
  },
  textColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#fff' : '#000';
  },
  primaryColor: function (scheme: string | null | undefined) {
    return scheme === 'dark' ? '#000' : '#fff';
  },
  white: '#fff',
  black: '#000',
  lightWhite: 'rgb(188, 188, 188)',
  lightDark: 'rgb(30, 30, 30)',
};

export default colors;
