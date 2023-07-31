export const setTheme = isLight => {
  return {
    transitionDurFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

    globalColors: {
      light: '#FAFAFA',
      personalDataText: '#22252A',
      accentPrimary: '#8BAA36',
      popularRecipesBorder: 'rgba(112, 112, 112, 0.17)',
      inputHover: '#fff',
      error: '#e74a3b',
    },
    backgroundPrimary: `${isLight ? '#FAFAFA' : '#1E1F28'}`,

    text: {
      titlePrimary: `${isLight ? '#001833' : '#FAFAFA'}`,
      textPrimary: `${isLight ? '#23262A' : '#FAFAFA'}`,
      textSecondary: `${isLight ? '#22252A' : '#FAFAFA'}`,
      textRecipeCard: `${isLight ? '#3E4462' : '#FAFAFA'}`,
      textPale: `${isLight ? '#BDBDBD' : '#FAFAFA'}`,
      textBright: `${isLight ? '#000' : '#FAFAFA'}`,
      categoryLinks: `${isLight ? '#BDBDBD' : 'rgba(250, 250, 250, 0.60)'}`,
      input: `${isLight ? 'rgba(0, 0, 0)' : '#FAFAFA'}`,
      inputPlaceholderAddRecipe: `${
        isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(250, 250, 250, 0.5)'
      }`,
      inputPlaceholderSearch: `${
        isLight ? '#BDBDBD' : 'rgba(250, 250, 250, 0.50)'
      }`,
      dropDown: `${
        isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(250, 250, 250, 0.5)'
      }`,
      dropDownActive: `${isLight ? '#8BAA36' : '#FAFAFA'}`,
      counterBox: `${isLight ? '#333333' : '#FAFAFA'}`,
      popularRecipes: `${isLight ? '#7E7E7E' : 'rgba(250, 250, 250, 0.60)'}`,
      myRecipes: `${isLight ? '#23262A' : 'rgba(250, 250, 250, 0.60)'}`,
      pagination: `${isLight ? '#656565' : 'rgba(250, 250, 250, 0.60)'}`,
      hover: `${isLight ? '#FAFAFA' : '#22252A'}`,
      disabled: `${
        isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(250, 250, 250, 0.3)'
      }`,
      recipePreparation: `${isLight ? 'rgba(0, 0, 0, 0.8)' : '#FAFAFA'}`,
      lowerFooter: `${
        isLight ? 'rgba(34, 37, 42, 0.5)' : 'rgba(250, 250, 250, 0.5)'
      }`,
      logoutHover: `${isLight ? '#FAFAFA' : '#8BAA36'}`,
      editInfoPlaceholder: `${
        isLight ? 'rgba(0, 0, 0, 0.6)' : 'rgba(250, 250, 250, 0.6)'
      }`,
    },

    input: {
      background: `${isLight ? '#FFF;' : 'transparent'}`,
      outline: `${isLight ? '#F0F0F0' : 'rgba(250, 250, 250, 0.50)'}`,
      bottomBorder: `${isLight ? '#E0E0E0;' : 'rgba(250, 250, 250, 0.30)'}`,
      hover: `${isLight ? 'rgba(0, 0, 0, 0.2);' : 'rgba(250, 250, 250, 0.80)'}`,
      focus: `${
        isLight ? 'rgba(51, 51, 51, 0.1)' : 'rgba(250, 250, 250, 0.50)'
      }`,
      editInfoIcon: `${
        isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(250, 250, 250, 0.80)'
      }`,
      editInfoBorder: `${
        isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(250, 250, 250, 0.20)'
      }`,
    },

    button: {
      background: `${isLight ? '#22252A' : '#8BAA36'}`,
      trashFavorite: `${isLight ? '#EBF3D4' : '#1E1F28'}`,
      trashMy: `${isLight ? '#8BAA36' : '#1E1F28'}`,
      hover: `${isLight ? '#22252A' : '#ebf3d4'}`,
      hoverReverse: `${isLight ? '#8BAA36' : '#ebf3d4'}`,
      logoutBorder: `${isLight ? 'transparent' : '#8BAA36'}`,
    },

    counterBox: `${isLight ? 'rgba(51, 51, 51, 0.30)' : '#FAFAFA'}`,

    select: {
      inputBackground: `${
        isLight ? 'rgba(217, 217, 217, 0.157)' : 'transparent'
      }`,
      dropDownBackground: `${isLight ? '#FFF' : '#8BAA36'}`,
      scroll: `${isLight ? '#E7E5E5;' : '#1E1F28'}`,
      hovered: `${isLight ? '#ebf3d4' : 'rgba(0, 0, 0, 0.5)'}`,
      outline: `${isLight ? 'transparent' : 'rgba(250, 250, 250, 0.20)'}`,
    },

    pagination: {
      background: `${isLight ? '#FAFAFA' : '#2A2C36'}`,
      boxShadow: `${
        isLight
          ? '0px 4px 4px 0px rgba(135, 135, 135, 0.20)'
          : '0px 4px 4px 0px rgba(31, 30, 30, 0.20)'
      }`,
      arrow: `${
        isLight ? 'rgba(169, 169, 169, 0.73)' : 'rgba(250, 250, 250, 0.60)'
      }`,
      activePage: `${isLight ? '#EBF3D4' : '#8BAA36'}`,
    },

    recipeCard: `${isLight ? '#FFF' : '#2A2C36'}`,

    categoriesBottom: `${isLight ? '#E0E0E0' : 'rgba(250, 250, 250, 0.20)'}`,

    currentRecipe: {
      background: `${isLight ? '#EBF3D4' : '#2A2C36'}`,
      checkBox: `${isLight ? '#7E7E7E' : '#FAFAFA'}`,
    },

    socialNetworks: {
      background: `${isLight ? '#8BAA36' : '#FAFAFA'}`,
      hover: `${isLight ? '#22252A' : '#8BAA36'}`,
    },

    checkBox: {
      border: `${
        isLight ? 'rgba(126, 126, 126, 0.5)' : 'rgba(250, 250, 250, 0.5)'
      }`,
    },
    lowerFooter: `${isLight ? '#FAFAFA' : '#1E1F28'}`,
  };
};
