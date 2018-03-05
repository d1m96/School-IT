insert into equip_classes (id_name) values ('Сombine-harvester');


insert into equips (model_class_id, id_name) values (0, 'Сombine-harvester №1');
insert into equips (model_class_id, id_name) values (0, 'Сombine-harvester №2');
insert into equips (model_class_id, id_name) values (0, 'Сombine-harvester №3');


insert into requirement_classes (id_name, target_model_class_id, target_model_id) values ('Target performance', 0, 0);
insert into requirement_classes (id_name, target_model_class_id, target_model_id) values ('Target performance', 0, 1);
insert into requirement_classes (id_name, target_model_class_id, target_model_id) values ('Target performance', 0, 2);


insert into work_calendars (descr, begin_date, end_date) values ('Change', '2018-01-01 T01:00', '2018-01-01 T01:15');
insert into work_calendars (descr, begin_date, end_date) values ('Repair', '2018-01-01 T01:15', '2018-01-01 T05:00');
insert into work_calendars (descr, begin_date, end_date) values ('Working', '2018-01-01 T05:00', '2018-01-01 T09:00');
insert into work_calendars (descr, begin_date, end_date) values ('Change', '2018-01-01 T09:00', '2018-01-01 T09:15');
insert into work_calendars (descr, begin_date, end_date) values ('Working', '2018-01-01 T09:15', '2018-01-01 T17:00');
insert into work_calendars (descr, begin_date, end_date) values ('Change', '2018-01-01 T17:00', '2018-01-01 T17:15');
insert into work_calendars (descr, begin_date, end_date) values ('Working', '2018-01-01 T17:15', '2018-01-02 T01:00');


insert into params (name, equip_id) values ('Max speed', 0);
insert into params (name, equip_id) values ('Date production', 0);
insert into params (name, equip_id) values ('Current production', 0);



insert into param_values (param_id, value) values (0, '10');
insert into param_values (param_id, value, time) values (1, '50', '2018-01-01 T01:00');
insert into param_values (param_id, value, time) values (2, '0', '2018-01-01 T05:00');
insert into param_values (param_id, value, time) values (2, '4', '2018-01-01 T07:00');
insert into param_values (param_id, value, time) values (2, '8', '2018-01-01 T09:00');
insert into param_values (param_id, value, time) values (2, '11', '2018-01-01 T11:00');
insert into param_values (param_id, value, time) values (2, '15', '2018-01-01 T13:00');
insert into param_values (param_id, value, time) values (2, '19', '2018-01-01 T15:00');
insert into param_values (param_id, value, time) values (2, '23', '2018-01-01 T17:00');
insert into param_values (param_id, value, time) values (2, '26', '2018-01-01 T19:00');
insert into param_values (param_id, value, time) values (2, '30', '2018-01-01 T21:00');
insert into param_values (param_id, value, time) values (2, '34', '2018-01-01 T23:00');
insert into param_values (param_id, value, time) values (2, '50', '2018-01-02 T01:00');












