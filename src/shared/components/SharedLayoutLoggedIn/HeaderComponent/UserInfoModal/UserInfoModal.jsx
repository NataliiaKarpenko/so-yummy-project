import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { CSSTransition } from 'react-transition-group';

import { validationSchema } from '../../../../Variables/validationSchema';
import { StyledUserInfoModal } from './UserInfoModal.styled';
import { updateCurrentUser } from 'redux/reduxAuth/authOperations';
import { selectAvatarURL, selectUserName } from 'redux/reduxAuth/authSelectors';
import icons from '../../../../sprite.svg';
import NameInput from 'shared/components/Auth/AuthInputs/NameInput';
import SubmitButton from 'shared/components/Auth/SubmitButton/SubmitButton';
import Backdrop from '../Backdrop/Backdrop';
import CloseBtn from '../../CloseBtn/CloseBtn';

const UserInfoModal = ({ showUserInfoModal, setShowUserInfoModal }) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const prevUserName = useSelector(selectUserName);
  const prevAvatarURL = useSelector(selectAvatarURL);

  const [initialAvatarURL, setInitialAvatarURL] = useState('');
  const [newAvatarURL, setNewAvatarURL] = useState(prevAvatarURL);
  const [avatarFile, setAvatarFile] = useState('');

  useEffect(() => {
    setInitialAvatarURL(prevAvatarURL);
  }, [prevAvatarURL]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setNewAvatarURL(initialAvatarURL);
        formRef.current.resetForm();
        setShowUserInfoModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowUserInfoModal, initialAvatarURL]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setNewAvatarURL(initialAvatarURL);
      formRef.current.resetForm();
      setShowUserInfoModal(false);
    }
  };

  const handleFileBtnClick = () => {
    document.getElementById('myFileInput').click();
  };

  return (
    <Formik
      initialValues={{ name: prevUserName, avatar: prevAvatarURL }}
      validationSchema={validationSchema.edit}
      innerRef={formRef}
      onSubmit={async (values, { setSubmitting, resetForm, initialValues }) => {
        console.log(values);

        try {
          const formData = new FormData();
          values.name !== prevUserName
            ? formData.append('name', values.name)
            : formData.append('name', prevUserName);

          avatarFile && formData.append('avatar', avatarFile);
          console.log(avatarFile);
          const actionResult = await dispatch(updateCurrentUser(formData));

          if (actionResult.type === 'auth/updateCurrentUser/fulfilled') {
            setSubmitting(false);
            setShowUserInfoModal(false);
            resetForm({ values: values });
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({
        values,
        initialValues,
        isSubmitting,
        errors,
        touched,
        resetForm,

        setFieldTouched,
        setFieldValue,
      }) => {
        const handleInputFocus = e => {
          setFieldTouched(e.target.name, false);
        };

        const handleInputBlur = e => {
          setFieldTouched(e.target.name, true);
          setFieldValue(e.target.name, e.target.value.trim());
        };

        const closeBtnHandler = e => {
          setNewAvatarURL(initialAvatarURL);
          setShowUserInfoModal(false);

          resetForm({
            values: initialValues,
          });
        };

        return (
          <CSSTransition
            in={showUserInfoModal}
            timeout={250}
            classNames="backdrop"
            unmountOnExit
          >
            <Backdrop handleBackdropClick={handleBackdropClick}>
              <StyledUserInfoModal>
                <CloseBtn
                  className="ModalBtn"
                  closeBtnHandler={closeBtnHandler}
                />
                <Form className="FormContainer">
                  <div className="AvatarContainer">
                    {newAvatarURL !==
                    'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1679336722/images_s8wrdd.jpg' ? (
                      <img src={newAvatarURL} alt="avatar" />
                    ) : (
                      <svg
                        width="40"
                        height="40"
                        aria-label="avatar"
                        className="AvatarIcon"
                      >
                        <use href={icons + '#user'}></use>
                      </svg>
                    )}
                    <Field
                      name="avarar"
                      type="file"
                      id="myFileInput"
                      style={{ display: 'none' }}
                      accept={'image/jpeg,image/png,image/gif'}
                      onChange={event => {
                        const file = event.currentTarget.files[0];
                        setNewAvatarURL(URL.createObjectURL(file));
                        setFieldValue('avatar', newAvatarURL);
                        setAvatarFile(file);
                      }}
                    />

                    <button
                      type="button"
                      className="UploadBtn"
                      onClick={handleFileBtnClick}
                    >
                      <svg width="24" height="24" aria-label="upload button">
                        <use href={icons + '#plus'}></use>
                      </svg>
                    </button>
                  </div>

                  <NameInput
                    values={values}
                    errors={errors}
                    touched={touched}
                    className="EditInfo"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                  />

                  <SubmitButton
                    disabled={isSubmitting}
                    text="Save changes "
                    className="UserInfoModalBtn"
                  />
                </Form>
              </StyledUserInfoModal>
            </Backdrop>
          </CSSTransition>
        );
      }}
    </Formik>
  );
};

export default UserInfoModal;
