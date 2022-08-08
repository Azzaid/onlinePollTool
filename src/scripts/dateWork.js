import {DateTime, Interval} from "luxon";

const currentDate = DateTime.now()

const dateToSendToServer = DateTime.now().toUTC().toISO();

const dateToProcessOnFrontEnd = DateTime.fromISO("ISO_STRING_from_server");

const dateToShowToUser = dateToProcessOnFrontEnd.toLocal().toFormat("MMMM HH:mm");

const userInputtedDate = DateTime.fromFormat("some_user_inputted_string","HH:mm");

userInputtedDate.isValid

userInputtedDate < DateTime.now();


const interval = Interval.fromDateTimes(userInputtedDate, DateTime.now());

interval.isValid

interval.contains(currentDate)



DateTime.now().day

DateTime.now().plus({minutes:87}).toFormat(); delayToDeliver: 87 minutes


