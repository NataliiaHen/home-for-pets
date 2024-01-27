/* eslint-disable */
import React, { memo, useContext } from "react";
import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";
import "./PickUpForm.scss";
import {
  NotificationContext,
  NotificationStatus,
} from "../../storage/NotificationContext";
import { pickUpRequest } from "../../api/pets";
import { PickUpFormFields } from "../../types/PickUpForm";

export const PickUpForm: React.FC = memo(() => {
  const { setNotification } = useContext(NotificationContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<PickUpFormFields>();

  const onSubmit: SubmitHandler<PickUpFormFields> = (
    data: PickUpFormFields
  ) => {
    pickUpRequest(data)
      .then((res) => {
        setNotification({
          message: "We contact with you soon",
          color: NotificationStatus.Success,
        });

        reset();
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const message = watch("message");

  return (
    <div className="pick-up">
      <form className="pick-up__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="pick-up__fields">
          <div className="pick-up__field pick-up__field--small">
            <label className="pick-up__label" htmlFor="name">
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
              className={classNames("pick-up__input", {
                "pick-up__input--error": errors?.name,
              })}
              placeholder="Your name"
              type="text"
              id="name"
            />

            {errors?.name && (
              <p className="pick-up__error">{errors.name.message}</p>
            )}
          </div>

          <div className="pick-up__field pick-up__field--small">
            <label className="pick-up__label" htmlFor="contactPhone">
              Your number
            </label>

            <input
              {...register("contactPhone", {
                required: "Phone number is require field!",
                pattern: {
                  value: /^(\+?38)?\s?0\d{9}$/,
                  message: "Invalid phone format",
                },
              })}
              placeholder="+380669678911"
              id="contactPhone"
              className={classNames("pick-up__input", {
                "pick-up__input--error": errors?.contactPhone,
              })}
            />

            {errors?.contactPhone && (
              <p className="pick-up__error">{errors.contactPhone.message}</p>
            )}
          </div>

          <div className="pick-up__field pick-up__field--big">
            <label className="pick-up__label" htmlFor="message">
              Your comment
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
              className={classNames("pick-up__input pick-up__input--text", {
                "pick-up__input--error": errors?.message,
              })}
              placeholder="Text"
              id="message"
            />

            {errors?.message && (
              <p className="pick-up__error">{errors.message.message}</p>
            )}

            {!errors?.message && message?.length > 300 && (
              <p className="pick-up__error pick-up__error--right">
                {`${message.length}/300`}
              </p>
            )}
          </div>
        </div>

        <button type="submit" className="pick-up__button">
          Send
        </button>
      </form>
    </div>
  );
});
