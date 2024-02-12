import './QuestionForm.scss';
import React, { memo, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container } from '../Container';
import { NotificationStatus } from '../../types/Notification';
import { ContactForm } from '../../types/ContactForm';
import { Loader } from '../Loader';
import { useActions } from '../../app/hooks';
import { useContactUsRequestMutation } from '../../api/apiSlice';
import { FormField } from '../FormField/FormField';

export const QuestionForm: React.FC = memo(() => {
  const { setNotification } = useActions();
  const [contactUsRequest] = useContactUsRequestMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactForm>({
    mode: 'onBlur',
  });
  const [isLoading, setIsloading] = useState(false);
  const questionRef = useRef(null);
  const message = watch('message');

  const onSubmit: SubmitHandler<ContactForm> = (data: ContactForm) => {
    setIsloading(true);

    contactUsRequest(data)
      .unwrap()
      .then(() => {
        setNotification({
          message: 'We contact with you soon',
          color: NotificationStatus.Success,
        });

        reset();
      })
      .catch(() => {
        setNotification({
          message: 'Something went wrong! Try later',
          color: NotificationStatus.Error,
        });
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div className="question" ref={questionRef}>
      {isLoading && <Loader />}
      <Container>
        <div className="question__content">
          <div className="question__box">
            <div className="question__top-box">
              <h2 className="question__title">Do you have any questions?</h2>

              <p className="question__sub-title">
                Ask any question and we will answer it
              </p>
            </div>

            <div className="question__form-box">
              <form
                className="question__form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="question__fields">
                  <div className="question__field">
                    <FormField
                      label="Name"
                      type="text"
                      placeholder="Your name"
                      error={errors?.name}
                      register={register('name', {
                        required: 'Name is required!',
                        pattern: {
                          value: /^[a-zA-Z ']+$/,
                          message: 'Invalid characters',
                        },
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters long',
                        },
                        maxLength: {
                          value: 15,
                          message: 'Name must be less then 15 characters long',
                        },
                      })}
                    />
                  </div>

                  <div className="question__field">
                    <FormField
                      label="Email"
                      type="text"
                      placeholder="Igor_Yakiv@gmail.com"
                      error={errors?.email}
                      register={register('email', {
                        required: 'Email is required!',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email',
                        },
                      })}
                    />
                  </div>

                  <div className="question__field">
                    <FormField
                      label="Your question"
                      type="textarea"
                      placeholder="Write your question here"
                      error={errors?.message}
                      register={register('message', {
                        required: 'Please type at least 10 characters.',
                        minLength: {
                          value: 10,
                          message: 'Please type at least 10 characters.',
                        },
                        maxLength: {
                          value: 300,
                          message: 'Please type less than 300 characters.',
                        },
                      })}
                      characterCount={message?.length}
                      maxCharacters={300}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="question__button"
                  disabled={!isValid}
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});
