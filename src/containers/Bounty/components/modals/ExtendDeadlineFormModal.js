import React from 'react';
import styles from './Modals.module.scss';
import { Modal, Button, Text } from 'components';
import { Field, reduxForm } from 'redux-form';
import { FormDatePicker } from 'form-components';
import { compose } from 'redux';
import { ModalFormReset } from 'hocs';
import validators from 'utils/validators';
import { getTimezone } from 'utils/helpers';

const ExtendDeadlineFormModal = props => {
  const {
    onClose,
    handleSubmit,
    minimumDeadline,
    visible,
    submitFailed,
    invalid
  } = props;

  const fieldValidators = [
    validators.required,
    validators.minDate(minimumDeadline)
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Modal
        dismissable={true}
        onClose={onClose}
        visible={visible}
        fixed
        size="small"
      >
        <Modal.Header closable={true}>
          <Modal.Message>Extend Deadline</Modal.Message>
          <Modal.Description>
            Indicate the time that you would like to extend the bounty deadline
            until{getTimezone() ? ` (timezone: ${getTimezone()}).` : '.'}
          </Modal.Description>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Field
            name="deadline"
            component={FormDatePicker}
            showTimeSelect
            minDate={minimumDeadline}
            validate={fieldValidators}
          />
        </Modal.Body>
        <Modal.Footer>
          {submitFailed &&
            invalid && (
              <Text inputLabel color="red">
                Fix errors before submitting.
              </Text>
            )}
          <Button
            margin
            onClick={e => {
              e.preventDefault();
              onClose();
            }}
            buttonType="button"
          >
            Cancel
          </Button>
          <Button type="action">Extend Deadline</Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default compose(
  reduxForm({
    form: 'extendDeadline',
    destroyOnUnmount: false
  }),
  ModalFormReset
)(ExtendDeadlineFormModal);
