import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import Select, {
  components, OnChangeValue, DropdownIndicatorProps, OptionProps,
} from 'react-select';
import './UkrainianDropdown.scss'; // Import your SCSS file
import { SelectOption, defaultOption, ukraineRegionsOptions } from '../../types/SelectOptions';

export const UkrainianDropdown = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption>(defaultOption);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const CustomOption = (
    props: OptionProps<SelectOption, true>,
  ) => {
    return (
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={selectedOption.value === props.children}
          style={{ marginRight: '8px' }}
        />
        {props.children}
      </components.Option>
    );
  };

  const CustomDropdownIndicator = (
    props: DropdownIndicatorProps<SelectOption, true>,
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <ReactSVG
          src={menuIsOpen ? 'img/icon/arrow-up.svg' : 'img/icon/arrow-down.svg'}
        />
      </components.DropdownIndicator>
    );
  };

  const handleChange = (newSelectedOption: OnChangeValue<SelectOption, boolean>) => {
    setSelectedOption(newSelectedOption as SelectOption);
  };

  return (
    <div className="filters-dropdown">
      <div className={classNames(
        'filters-dropdown__type',
        { 'filters-dropdown__type--menu-open': menuIsOpen },
      )}
      >
        <div className="filters-dropdown__icon-box">
          <ReactSVG
            src="img/icon/location.svg"
            className="filters__type-icon"
          />
        </div>
        Location
      </div>
      <div className="custom-dropdown">
        <Select
          className="react-select-container"
          classNamePrefix="custom-select"
          options={ukraineRegionsOptions}
          value={selectedOption || defaultOption}
          isSearchable
          autoFocus={false}
          blurInputOnSelect
          maxMenuHeight={300}
          onChange={handleChange}
          onMenuOpen={() => setMenuIsOpen(true)}
          onMenuClose={() => setMenuIsOpen(false)}
          components={{
            IndicatorSeparator: () => null,
            Option: CustomOption,
            DropdownIndicator: CustomDropdownIndicator,
          }}
        />
      </div>
    </div>
  );
};
