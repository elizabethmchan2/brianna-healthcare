import { useForm } from 'react-hook-form'
import './App.css';

const TextArea = ({label, id, name, register, placeholder}) => {
  return (
    <div>
      <label for={id}>{label}</label>
      <br />
      <textarea rows={5} id={id} type="text" placeholder={placeholder} {...register(name)} />
    </div>
  )
}

const RangeDropdown = ({label, id, name, register}) => {
  return (
    <div>
      <label for={id}>{label}</label>
      <select id={id} {...register(name)}>
      <option value="">--Choose a number--</option>
        {
          [0,1,2,3,4,5,6,7,8,9,10].map(val => {
            return (
              <option value={val}>{val}</option>
            )
          })
        }
      </select>
    </div>
  )
}

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      date: '',
      dailyInteractions: {
        num: 0,
        text: '',
      },
      sleepQuality: {
        num: 0,
        text: ''
      },
      attitude: {
        num: 0,
        text: ''
      },
      bathroomHabits: '',
      foodHabits: {
        breakfast: '',
        lunch: '',
        dinner: '',
        other: ''
      },
      medicationHabits: ''
    }
  });

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Brianna Healthcare Records </h1>
      </header>
      <body>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="FormField">
          <label for="date">Date</label>
          <input id="date" type="date" placeholder="Date" {...register("date")} />
        </div>
        <div className="FormField">
          <RangeDropdown label="Daily Interactions" name="dailyInteractions.num" id="daily-interactions-num" register={register} />
          <TextArea label="Add additional details about her daily interactions" name="dailyInteractions.text" placeholder="Additional details..." id="daily-interactions-text" register={register} />
        </div>
        <div className="FormField">
          <RangeDropdown label="Sleep Quality" name="sleepQuality.num" id="sleep-quality-num" register={register} />
          <TextArea label="Add additional details about her sleeping habits" name="sleepQuality.text" placeholder="Additional details..." id="sleep-quality-text" register={register} />
        </div>
        <div className="FormField">
          <RangeDropdown label="Attitude and Mood" name="attitude.num" id="attitude-num" register={register}/>
          <TextArea label="Add additional details about her attitude and mood" name="attitude.text" placeholder="Additional details..." id="attitude-text" register={register} />
        </div>
        <div className="FormField">
          <TextArea label="Bathroom habits" name="bathroomHabits" placeholder="Enter details..." id="bathroom-habits" register={register} />
        </div>
        <div className="FormField">
          <TextArea label="Food Habits: Breakfast" name="foodHabits.breakfast" placeholder="Enter details..." id="food-habits-breakfast" register={register}  />
          <TextArea label="Food Habits: Lunch" name="foodHabits.lunch" placeholder="Enter details..." id="food-habits-lunch" register={register}  />
          <TextArea label="Food Habits: Dinner" name="foodHabits.dinner" placeholder="Enter details..." id="food-habits-dinner" register={register}  />
          <TextArea label="Food Habits: Other" name="foodHabits.other" placeholder="Additional details..." id="food-habits-other" register={register}  />
        </div>
        <div className="FormField">
          <TextArea label="Medication Habits" name="medicationHabits" placeholder="Enter details..." id="medication-habits" register={register} />
        </div>
        <input type="submit" />
        </form>
      </body>
    </div>
  );
}

export default App;
