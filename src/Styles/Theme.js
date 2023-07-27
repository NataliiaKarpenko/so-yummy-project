import { useSelector } from 'react-redux';
import { selectThemeIsLight } from 'redux/reduxTheme/themeSelector';
import { ThemeProvider } from 'styled-components';

export const setTheme = isLight => {
  return {
    globalColors: {
      light: '#FAFAFA',
      personalDataText: '#22252A',
      accentPrimary: '#8BAA36',
      popularRecipesBorder: '#rgba(112, 112, 112, 0.17)',
    },

    backgroundPrimary: `${isLight ? '#FAFAFA' : '#1E1F28'}`,

    text: {
      titlePrimary: `${isLight ? '#001833' : '#FAFAFA'}`,
      textPrimary: `${isLight ? '#23262A' : '#FAFAFA'}`,
      textSecondary: `${isLight ? '#22252A' : '#FAFAFA'}`,
      textRecipeCard: `${isLight ? '#3E4462' : '#FAFAFA'}`,
      textPale: `${isLight ? '#BDBDBD' : '#FAFAFA'}`,
      textBright: `${isLight ? '#000' : '#FAFAFA'}`,
      input: `${isLight ? 'rgba(0, 0, 0)' : '#FAFAFA'}`,
      inputPlaceholderAddRecipe: `${
        isLight ? 'rgba(0, 0, 0, 0.5)' : '#FAFAFA'
      }`,
      inputPlaceholderSearch: `${isLight ? '#3E4462' : '#FAFAFA'}`,
      select: `${isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.6)'}`,
      dropDown: `${isLight ? '#FAFAFA' : 'rgba(0, 0, 0, 0.5)'}`,
      dropDownActive: `${isLight ? '#8BAA36' : '#FAFAFA'}`,
      counterBox: `${isLight ? '#333333' : '#FAFAFA'}`,
      popularRecipes: `${isLight ? '#7E7E7E' : 'rgba(250, 250, 250, 0.60)'}`,
      myRecipes: `${isLight ? '#EBF3D4' : 'rgba(250, 250, 250, 0.60)'}`,
      pagination: `${isLight ? '#656565' : 'rgba(250, 250, 250, 0.60)'}`,
    },

    input: {
      outline: `${isLight ? '#F0F0F0' : 'rgba(250, 250, 250, 0.50)'}`,
      bottomBorder: `${isLight ? '#E0E0E0;' : '#FAFAFA'}`,
    },

    button: {
      background: `${isLight ? '#22252A' : '#8BAA36'}`,
      trashFavorite: `${isLight ? '#22252A' : '#1E1F28'}`,
      trashMy: `${isLight ? '#8BAA36' : '#1E1F28'}`,
    },

    counterBox: `${isLight ? 'rgba(51, 51, 51, 0.30)' : '#FAFAFA'}`,

    select: {
      inputBackground: `${isLight ? '#D9D9D9' : 'transparent'}`,
      dropDownBackground: `${isLight ? '#FFF' : '#8BAA36'}`,
      scroll: `${isLight ? '#E7E5E5;' : '#1E1F28'}`,
    },

    pagination: {
      background: `${isLight ? '#FAFAFA' : '#2A2C36'}`,
      boxShadow: `${
        isLight
          ? '0px 4px 4px 0px rgba(31, 30, 30, 0.20)'
          : '0px 4px 4px 0px rgba(31, 30, 30, 0.20)'
      }`,
      arrow: `${
        isLight ? 'rgba(169, 169, 169, 0.73)' : 'rgba(250, 250, 250, 0.60)'
      }`,
      activePage: `${isLight ? '#EBF3D4' : '#8BAA36'}`,
    },

    myRecipes: `${isLight ? '#FFF' : '#2A2C36'}`,
    recipe: {
      background: `${isLight ? '#EBF3D4' : '#2A2C36'}`,
      checkBox: `${isLight ? '#7E7E7E' : '#FAFAFA'}`,
    },
  };
};

// --main-background-color: #2a2c36;
//   --secondary-background-color: #ebf3d4;
//   --form-hover-state-color: #ffffff;
//   --error-color: #e74a3b;
//   --warning-color: #f6c23e;
//   --success-color: #3cbc81;
//   --primary-btn-color: #8baa36;
//   --secondary-btn-color: #22252a;
//   --primary-font-color: #fafafa;
//   --secondary-font-color: #23262a;
//   --default-background-color: #d9d9d9;

//   --toastify-color-success: #3cbc81;
//   --toastify-color-error: #e74a3b;
//   --toastify-color-info: #f6c23e;

//   --transition-dur-func: 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

export const Theme = ({ children }) => {
  const isLightTheme = useSelector(selectThemeIsLight);

  return (
    <ThemeProvider theme={setTheme(isLightTheme)}>{children}</ThemeProvider>
  );
};
