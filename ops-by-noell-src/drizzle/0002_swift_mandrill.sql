CREATE TABLE `botSessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`telegramUserId` varchar(32) NOT NULL,
	`telegramUsername` varchar(128),
	`telegramFirstName` varchar(128),
	`step` enum('start','awaiting_interest','awaiting_contact_method','awaiting_phone','awaiting_email','complete') NOT NULL DEFAULT 'start',
	`interest` varchar(64),
	`contactMethod` varchar(16),
	`contactValue` varchar(320),
	`source` varchar(64) DEFAULT 'direct',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `botSessions_id` PRIMARY KEY(`id`),
	CONSTRAINT `botSessions_telegramUserId_unique` UNIQUE(`telegramUserId`)
);
