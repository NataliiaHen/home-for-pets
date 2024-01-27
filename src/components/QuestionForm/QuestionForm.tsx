/* eslint-disable */
import React, { memo, useContext, useRef } from 'react';
import classNames from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container } from '../Container';
import './QuestionForm.scss';
import { NotificationContext, NotificationStatus } from '../../storage/NotificationContext';
import { contactUsRequest } from '../../api/pets';
import { ContactForm } from '../../types/ContactForm';

export const QuestionForm: React.FC = memo(() => {
  const { setNotification } = useContext(NotificationContext);
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
  } = useForm<ContactForm>();
  const questionRef = useRef(null);

  const onSubmit: SubmitHandler<ContactForm> = (data: ContactForm) => {
    contactUsRequest(data)
      .then(res => {
        setNotification({
          message: 'We contact with you soon',
          color: NotificationStatus.Success,
        });
    
        reset();
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      }
    )
  };

  const message = watch("message");

  return (
    <div className="question" ref={questionRef}>
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
                    <label className="question__label" htmlFor="name">
                      Name
                    </label>

                    <input
                      {...register("name", {
                        required: "Name is require field!",
                        minLength: {
                          value: 3,
                          message: "Email must be at least 3 characters long",
                        },
                      })}
                      className={classNames("question__input", {
                        "question__input--error": errors?.name,
                      })}
                      placeholder="Your name"
                      type="text"
                      id="name"
                    />

                    {errors?.name && (
                      <p className="question__error">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="question__field">
                    <label className="question__label" htmlFor="email">
                      Email
                    </label>

                    <input
                      {...register("email", {
                        required: "Email is require field!",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter valid email",
                        },
                      })}
                      placeholder="Igor_Yakiv@gmail.com"
                      id="email"
                      className={classNames("question__input", {
                        "question__input--error": errors?.email,
                      })}
                    />

                    {errors?.email && (
                      <p className="question__error">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="question__field">
                    <label className="question__label" htmlFor="question">
                      Your question
                    </label>

                    <textarea
                      {...register("message", {
                        required: "Please type at least 10 characters.",
                        minLength: {
                          value: 10,
                          message: "Please type at least 10 characters.",
                        },
                        maxLength: {
                          value: 300,
                          message: "Please type less than 300 characters.",
                        },
                      })}
                      className={classNames(
                        "question__input question__input--text",
                        { "question__input--error": errors?.message }
                      )}
                      placeholder="Write your question here"
                      id="question"
                    />

                    {errors?.message && (
                      <p className="question__error">
                        {errors.message.message}
                      </p>
                    )}

                    {!errors?.message && message?.length > 300 && (
                      <p className="question__error question__error--right">
                        {`${message.length}/300`}
                      </p>
                    )}
                  </div>
                </div>

                <button type="submit" className="question__button">
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
