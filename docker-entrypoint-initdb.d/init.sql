CREATE DATABASE IF NOT EXISTS alerts;
USE alerts;

CREATE TABLE IF NOT EXISTS alert(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `server` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `createdAt` timestamp(6) NOT NULL,
    `server_type` VARCHAR(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;

INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server', 'description',  CURRENT_DATE(), 'type');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server1', 'description1',  CURRENT_DATE(), 'type1');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server2', 'description2',  CURRENT_DATE(), 'type2');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server3', 'description3',  CURRENT_DATE(), 'type3');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server4', 'description4',  CURRENT_DATE(), 'type4');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server5', 'description5',  CURRENT_DATE(), 'type5');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server6', 'description6',  CURRENT_DATE(), 'type6');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server7', 'description7',  CURRENT_DATE(), 'type7');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server8', 'description8',  CURRENT_DATE(), 'type8');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server9', 'description9',  CURRENT_DATE(), 'type9');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server10', 'description10',  CURRENT_DATE(), 'type10');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server11', 'description11',  CURRENT_DATE(), 'type11');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server12', 'description12',  CURRENT_DATE(), 'type12');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server13', 'description13',  CURRENT_DATE(), 'type13');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server14', 'description14',  CURRENT_DATE(), 'type14');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server15', 'description15',  CURRENT_DATE(), 'type15');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server16', 'description16',  CURRENT_DATE(), 'type16');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server17', 'description17',  CURRENT_DATE(), 'type17');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server18', 'description18',  CURRENT_DATE(), 'type18');
INSERT INTO alert (`server`, `description`, `createdAt`, `server_type`) values('server19', 'description19',  CURRENT_DATE(), 'type19');