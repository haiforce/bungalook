import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const PlantForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.plant?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.plant?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.plant?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.plant?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="media"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Media
        </Label>

        <TextAreaField
          name="media"
          defaultValue={JSON.stringify(props.plant?.media)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true, required: true }}
        />

        <FieldError name="media" className="rw-field-error" />

        <Label
          name="collectionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Collection id
        </Label>

        <NumberField
          name="collectionId"
          defaultValue={props.plant?.collectionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="collectionId" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <TextField
          name="size"
          defaultValue={props.plant?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="soil"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Soil
        </Label>

        <TextField
          name="soil"
          defaultValue={props.plant?.soil}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="soil" className="rw-field-error" />

        <Label
          name="flowers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Flowers
        </Label>

        <TextField
          name="flowers"
          defaultValue={props.plant?.flowers}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="flowers" className="rw-field-error" />

        <Label
          name="foliage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Foliage
        </Label>

        <TextField
          name="foliage"
          defaultValue={props.plant?.foliage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="foliage" className="rw-field-error" />

        <Label
          name="attracts"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Attracts
        </Label>

        <TextField
          name="attracts"
          defaultValue={props.plant?.attracts}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="attracts" className="rw-field-error" />

        <Label
          name="flowering"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Flowering
        </Label>

        <TextField
          name="flowering"
          defaultValue={props.plant?.flowering}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="flowering" className="rw-field-error" />

        <Label
          name="conditions"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Conditions
        </Label>

        <TextField
          name="conditions"
          defaultValue={props.plant?.conditions}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="conditions" className="rw-field-error" />

        <Label
          name="plantType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Plant type
        </Label>

        <TextField
          name="plantType"
          defaultValue={props.plant?.plantType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="plantType" className="rw-field-error" />

        <Label
          name="tag"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag
        </Label>

        <TextField
          name="tag"
          defaultValue={props.plant?.tag}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tag" className="rw-field-error" />

        <Label
          name="vicfloraUuid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vicflora uuid
        </Label>

        <TextField
          name="vicfloraUuid"
          defaultValue={props.plant?.vicfloraUuid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vicfloraUuid" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlantForm
