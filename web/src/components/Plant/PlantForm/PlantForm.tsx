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
          name="information"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Information
        </Label>
        
          <TextAreaField
            name="information"
            defaultValue={JSON.stringify(props.plant?.information)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsJSON: true, required: true }}
          />
        

        <FieldError name="information" className="rw-field-error" />

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

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlantForm
