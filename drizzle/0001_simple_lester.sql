CREATE TABLE `chatLeads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(128) NOT NULL,
	`email` varchar(320) NOT NULL,
	`businessType` varchar(256) NOT NULL,
	`question` text,
	`page` varchar(256),
	`notified` enum('yes','no') NOT NULL DEFAULT 'no',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chatLeads_id` PRIMARY KEY(`id`)
);
