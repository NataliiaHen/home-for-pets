/* eslint-disable */
import './AdoptForm.scss';
import React, { memo, useCallback, useContext, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';
import { PetFormData } from '../../types/PetForm';
import { NotificationContext, NotificationStatus } from '../../storage/NotificationContext';
import { ageOptions, ukraineRegionsOptions } from '../../types/SelectOptions';
import CustomSelect from '../Select/Select';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import { addPet } from '../../api/pets';
import { appendFormData } from '../../helpers/appendFormData';

const AdoptForm: React.FC = memo(() => {
  const { setNotification } = useContext(NotificationContext);

  const {
    handleSubmit,
    control,
    register,
    reset,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm<PetFormData>({
    defaultValues: {
      post: {},
      images: [],
    },
  });

  const [currentPhotoInput, setCurrentPhotoInput] = useState<number>(0);
  const description = getValues('post.description');
  const images = getValues('images');

  const onSubmit: SubmitHandler<PetFormData> = (data: PetFormData) => {
    const formData = appendFormData(data);

    addPet(formData)
      .then(() => {
        setNotification({
          message: 'We contact with you soon',
          color: NotificationStatus.Success,
        });

        reset();
        setCurrentPhotoInput(0);
      });
  };

  const handlePreviewChange = useCallback(() => {
    const newInputIndex = images.findIndex((photo) => !photo);

    setCurrentPhotoInput((cur) => {
      let newIndex;

      if (newInputIndex >= 0) {
        newIndex = newInputIndex;
      } else {
        newIndex = cur + 1;
      }

      return newIndex;
    });
  }, [images]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="adopt-form">
      <h2 className="adopt-form__title">Fill the information</h2>

      <section className="adopt-form__section">
        <p className="adopt-form__section-title">About You</p>

        <div className="adopt-form__section-content">
          <div className="adopt-form__field adopt-form__field--half-block">
            <label className="adopt-form__field-label" htmlFor="name">
              Name
            </label>

            <input
              {...register('post.ownerName', {
                required: 'Name is require field!',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters long',
                },
              })}
              className={classNames('adopt-form__input', {
                'adopt-form__input--error': errors?.post?.ownerName,
              })}
              placeholder="Your name"
              type="text"
              id="name"
            />

            {errors?.post?.ownerName && (
              <p className="adopt-form__error">
                {errors.post.ownerName.message}
              </p>
            )}
          </div>

          <div className="adopt-form__field adopt-form__field--half-block">
            <label className="adopt-form__field-label" htmlFor="phone">
              Number
            </label>

            <div className="control">
              <input
                type="tel"
                placeholder="Phone number"
                {...register('post.ownerContactPhone', {
                  required: 'Phone number is require field!',
                  pattern: {
                    value: /^(\+?38)?\s?0\d{9}$/,
                    message: 'Invalid phone format',
                  },
                })}
                className="adopt-form__input"
                id="phone"
              />
            </div>

            {errors?.post?.ownerContactPhone && (
              <p className="adopt-form__error">
                {errors.post.ownerContactPhone.message}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="adopt-form__section">
        <p className="adopt-form__section-title">About Pet</p>

        <div className="adopt-form__section-content">
          <div className="adopt-form__field">
            <label
              className="adopt-form__field-label"
              htmlFor="pet-name"
            >
              Name
            </label>
            <div className="control">
              <input
                {...register('post.name', {
                  required: 'Pet name is require field!',
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters long',
                  },
                })}
                className={classNames('adopt-form__input', {
                  'adopt-form__input--error': errors?.post?.name,
                })}
                placeholder="Your name"
                type="text"
                id="pet-name"
              />

              {errors?.post?.name && (
                <p className="adopt-form__error">{errors.post.name.message}</p>
              )}
            </div>
          </div>

          <div className="adopt-form__field">
            <label className="adopt-form__field-label">
              <div className="adopt-form__icon-box">
                <ReactSVG
                  src="img/icon/paw.svg"
                  className="adopt-form__field-label-icon"
                />
              </div>
              Animal Type
            </label>
            <div className="adopt-form__radio-group">
              <div className="adopt-form__radio-button-box">
                <input
                  type="radio"
                  id="cat"
                  value="CAT"
                  {...register('post.animalType', {
                    required: 'Animal type is required',
                  })}
                  className="adopt-form__radio-button"
                />
                <label htmlFor="cat" className="adopt-form__radio-label">
                  Cat
                </label>
              </div>

              <div className="adopt-form__radio-button-box">
                <input
                  type="radio"
                  id="dog"
                  value="DOG"
                  {...register('post.animalType', {
                    required: 'Animal type is required',
                  })}
                  className="adopt-form__radio-button"
                />

                <label htmlFor="dog" className="adopt-form__radio-label">
                  Dog
                </label>
              </div>
            </div>
          </div>

          <div className="adopt-form__field">
            <label className="adopt-form__field-label">
              <div className="adopt-form__icon-box">
                <ReactSVG
                  src="img/icon/gender.svg"
                  className="adopt-form__field-label-icon"
                />
              </div>
              Gender
            </label>
            <div className="adopt-form__radio-group">
              <div className="adopt-form__radio-button-box">
                <input
                  type="radio"
                  id="male"
                  value="male"
                  {...register('post.gender', {
                    required: 'Pet gender is required',
                  })}
                  className="adopt-form__radio-button"
                />

                <label htmlFor="male" className="adopt-form__radio-label">
                  Male
                </label>
              </div>

              <div className="adopt-form__radio-button-box">
                <input
                  type="radio"
                  id="female"
                  value="female"
                  {...register('post.gender', {
                    required: 'Pet gender is required',
                  })}
                  className="adopt-form__radio-button"
                />

                <label htmlFor="female" className="adopt-form__radio-label">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="adopt-form__field adopt-form__field--half-block">
            <label className="adopt-form__field-label">
              <div className="adopt-form__icon-box">
                <ReactSVG
                  src="img/icon/location.svg"
                  className="adopt-form__field-label-icon"
                />
              </div>
              Location
            </label>

            <Controller
              name="post.location"
              control={control}
              render={({ field }) => (
                <>
                  <CustomSelect
                    options={ukraineRegionsOptions}
                    field={field}
                    placeholder="All regions"
                  />
                  {errors?.post?.location && (
                    <span className="adopt-form__error">
                      {errors?.post?.location.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: 'Location is required' }}
            />
          </div>

          <div className="adopt-form__field adopt-form__field--half-block">
            <label className="adopt-form__field-label" htmlFor="age">
              <div className="adopt-form__icon-box">
                <ReactSVG
                  src="img/icon/calendar.svg"
                  className="adopt-form__field-label-icon"
                />
              </div>
              Age
            </label>

            <Controller
              name="post.age"
              control={control}
              render={({ field }) => (
                <>
                  <CustomSelect
                    options={ageOptions}
                    field={field}
                    placeholder="All"
                  />
                  {errors?.post?.age && (
                    <span className="adopt-form__error">
                      {errors?.post?.age.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: 'Age is required' }}
            />
          </div>

          <div className="adopt-form__field">
            <label className="adopt-form__field-label" htmlFor="description">
              Description
            </label>

            <textarea
              {...register('post.description', {
                required: 'Please type at least 10 characters.',
                minLength: {
                  value: 10,
                  message: 'Please type at least 10 characters.',
                },
                maxLength: {
                  value: 250,
                  message: 'Please type less than 250 characters.',
                },
              })}
              className={classNames(
                'adopt-form__input adopt-form__input--text',
                { 'adopt-form__input--error': errors?.post?.description },
              )}
              placeholder="Briefly describe the pet"
              id="question"
            />

            {errors?.post?.description && (
              <p className="adopt-form__error">
                {errors?.post?.description.message}
              </p>
            )}

            {!errors?.post?.description && description?.length > 250 && (
              <p className="adopt-form__error adopt-form__error--right">
                {`${description.length}/250`}
              </p>
            )}
          </div>

          <div className="adopt-form__field">
            <label className="adopt-form__field-label" htmlFor="description">
              Photos:
            </label>

            <Controller
              name="images"
              control={control}
              render={({ field }) => (
                <div className="adopt-form__photo-container">
                  {[1, 2, 3, 4].map((num, index) => {
                    const handleImageChange = useCallback(
                      (file: File | null) => {
                        const updatedValues = [...field.value];
                        updatedValues[index] = file;
                        field.onChange(updatedValues);
                      },
                      [field]
                    );

                    return (
                      <ImageUpload
                        key={num}
                        onChange={handleImageChange}
                        currentInput={currentPhotoInput === index}
                        handlePreviewChange={handlePreviewChange}
                        clearPreview={isSubmitSuccessful}
                      />
                    );
                  })}
                  {errors.images && (
                    <span className="adopt-form__error">
                      {errors.images?.message}
                    </span>
                  )}
                </div>
              )}
              rules={{ required: 'At least one photo is required' }}
            />
          </div>
        </div>
      </section>

      <button type="submit" className="adopt-form__button">
        Send
      </button>
    </form>
  );
});

export default AdoptForm;
