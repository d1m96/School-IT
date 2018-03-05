create table if not exists equip_classes(
	model_class_id serial primary key,
	id_name text not null);

create table if not exists equips(
	model_id serial primary key,
	model_class_id int,
	id_name text not null,
	foreign key (model_class_id) references equip_classes (model_class_id));

create table if not exists requirement_classes(
	model_class_id serial primary key,
	id_name text not null,
	target_model_class_id int,
	target_model_id int,
	foreign key (target_model_class_id) references equip_classes (model_class_id),
	foreign key (target_model_id) references equips (model_id));

create table if not exists work_calendars(
	work_calendar_id serial primary key,
	descr text not null,
	begin_date text not null,
	end_date text not null);


create table if not exists params(
	param_id serial primary key,
	name text not null,
	equip_id int,
	foreign key (equip_id) references equips (model_id));


create table if not exists param_values(
	param_value_id serial primary key,
	param_id int,
	value text,
	time text,
	foreign key (param_id) references params (param_id));
