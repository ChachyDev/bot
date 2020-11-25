import { FireMember } from "../../lib/extensions/guildmember";
import { FireMessage } from "../../lib/extensions/message";
import { FireGuild } from "../../lib/extensions/guild";
import { FireUser } from "../../lib/extensions/user";
import { constants } from "../../lib/util/constants";
import { Language } from "../../lib/util/language";
import { TextChannel, Role } from "discord.js";
import { Ban } from "@aero/ksoft";

export default class enUS extends Language {
  constructor() {
    super("en-US", {
      language: {
        // Remove DEFAULT if adding a new language
        DEFAULT: (key: string) =>
          `${key} has not been localized for any languages yet.`,
        USER_NOT_FOUND: "User not found! Try use an ID instead.",
        MEMBER_NOT_FOUND: "Member not found! Try use an ID instead.",
        CHANNEL_NOT_FOUND: "Channel not found! Try use an ID instead.",
        ROLE_NOT_FOUND: "Role not found! Try use an ID instead.",
        INVALID_USER_ID: "User not found! Make sure the ID is valid.",
        INVALID_MEMBER_ID: "Member not found! Make sure the ID is valid.",
        INVALID_CHANNEL_ID: "Channel not found! Make sure the ID is valid.",
        INVALID_ROLE_ID: "Role not found! Make sure the ID is valid.",
        INVALID_MESSAGE:
          "Message not found! Make sure you're giving a valid id/link.",
        UNKNOWN_COMMAND: "Command not found",
        COMMAND_OWNER_ONLY: "Only my owner can use this command",
        // invite will be changed when deployed to main bot
        COMMAND_GUILD_ONLY:
          "You can only use this command in a server. You can invite me to a server at <https://inv.wtf/tsbot>",
        COMMAND_PREMIUM_ONLY:
          "Only premium guilds can use this command. Learn more at https://inv.wtf/premium",
        COMMAND_EXPERIMENT_REQUIRED: "The maze wasn't meant for you.",
        COMMAND_ACCOUNT_TOO_YOUNG:
          "Your account has been created too recently!",
        COMMAND_GUILD_LOCKED:
          "This command is restricted to certain guilds and this guild is not one of them.",
        COMMAND_ERROR_CONCURRENCY:
          // For different languages, you may want to change the "hold your horses" bit as it may not make sense in that language
          "Whoa, hold your horses there! Wait for the command to finish before running it again",
        COMMAND_ERROR_GENERIC: (id: string) =>
          `Something went wrong while running ${id}`,
        HELLO_PREFIX: (prefix: string) =>
          `Hey! My prefix here is \`${prefix}\` or you can mention me :)`,
        ERROR_ROLE_UNUSABLE:
          "This role cannot be used as it is either managed by an integration or higher than my top role",
        ERROR_NO_KSOFT:
          "Unable to use KSoft.Si API due to lack of authentication",
        NO_MODERATORS_SET: "There are no moderators set in this guild.",
        MORE_INTEGRATIONS:
          "Want more integrations? Use the suggest command to suggest some!",
        MEMBERS: "Members",
        USERS: "Users",
        REGION: "Region",
        STATUS: "Status",
        UUID: "UUID",
        REASON: "Reason",
        MENTION: "Mention",
        CREATED: "Created",
        CREATED_GUILD: "Created Guild",
        JOINED: "Joined",
        JOIN_POSITION: "Join Position",
        NICKNAME: "Nickname",
        ABOUT: "About",
        ROLES: "Roles",
        NOTES: "Notes",
        TITLE: "Title",
        STATS: "Stats",
        GUILD: "Guild",
        GUILDS: "Guilds",
        CHANNEL: "Channel",
        ATTACHMENT: "Attachment",
        REGION_DEPRECATED: "❓ Deprecated Region",
        REGIONS: {
          brazil: "🇧🇷 Brazil",
          europe: "🇪🇺 Europe",
          hongkong: "🇭🇰 Hong Kong",
          india: "🇮🇳 India",
          japan: "🇯🇵 Japan",
          russia: "🇷🇺 Russia",
          singapore: "🇸🇬 Singapore",
          southafrica: "🇿🇦 South Africa",
          sydney: "🇦🇺 Sydney",
          "us-central": "🇺🇸 Central US",
          "us-south": "🇺🇸 US South",
          "us-east": "🇺🇸 US East",
          "us-west": "🇺🇸 US West",
        },
        KEY_PERMISSIONS: "Key Permissions",
        PERMISSIONS_TEXT: "Permissions",
        PERMISSIONS: {
          // If possible, use the translations from the Discord client here
          CREATE_INSTANT_INVITE: "Create Invite",
          KICK_MEMBERS: "Kick Members",
          BAN_MEMBERS: "Ban Members",
          ADMINISTRATOR: "Administrator",
          MANAGE_CHANNELS: "Manage Channels",
          MANAGE_GUILD: "Manage Server",
          ADD_REACTIONS: "Add Reactions",
          VIEW_AUDIT_LOG: "View Audit Log",
          PRIORITY_SPEAKER: "Priority Speaker",
          STREAM: "Video",
          VIEW_CHANNEL: "Read Messages",
          SEND_MESSAGES: "Send Messages",
          SEND_TTS_MESSAGES: "Send TTS Messages",
          MANAGE_MESSAGES: "Manage Messages",
          EMBED_LINKS: "Embed Links",
          ATTACH_FILES: "Attach Files",
          READ_MESSAGE_HISTORY: "Read Message History",
          MENTION_EVERYONE:
            "Mention @\u200beveryone, @\u200bhere and All Roles",
          USE_EXTERNAL_EMOJIS: "Use External Emojis",
          VIEW_GUILD_INSIGHTS: "View Server Insights",
          CONNECT: "Connect",
          SPEAK: "Speak",
          MUTE_MEMBERS: "Mute Members (voice)",
          DEAFEN_MEMBERS: "Deafen Members",
          MOVE_MEMBERS: "Move Members",
          USE_VAD: "Use Voice Activity",
          CHANGE_NICKNAME: "Change Nickname",
          MANAGE_NICKNAMES: "Manage Nicknames",
          MANAGE_ROLES: "Manage Roles",
          MANAGE_WEBHOOKS: "Manage Webhooks",
          MANAGE_EMOJIS: "Manage Emojis",
        },
        MISSING_PERMISSIONS_USER: (permissions: string[], command: string) =>
          `You are missing ${permissions.join(
            ", "
          )} permission(s) to run ${command}.`,
        MISSING_PERMISSIONS_CLIENT: (permissions: string[], command: string) =>
          `I am missing ${permissions.join(
            ", "
          )} permission(s) to run ${command}.`,
        FEATURES: {
          ENABLED_DISCOVERABLE_BEFORE: "Enabled Discoverable Before",
          WELCOME_SCREEN_ENABLED: "Welcome Screen",
          ANIMATED_ICON: "Animated Icon",
          INVITE_SPLASH: "Invite Splash",
          DISCOVERABLE: "[Discoverable](https://discord.com/guild-discovery)",
          MORE_EMOJI: "More Emoji",
          FEATURABLE: "Featurable",
          VANITY_URL: "Vanity URL",
          COMMUNITY: "[Community](https://dis.gd/communityservers)",
          PARTNERED: "[Partnered](https://dis.gd/partners)",
          COMMERCE: "[Store Channels](https://dis.gd/sellyourgame)",
          VERIFIED: "[Verified](https://dis.gd/vfs)",
          BANNER: "Banner",
          NEWS:
            "[Announcement Channels](https://support.discord.com/hc/en-us/articles/360032008192)",
          // CUSTOM FEATURES
          PREMIUM:
            "<:firelogo:665339492072292363> [Premium](https://gaminggeek.dev/premium)",
        },
        POWERED_BY_KSOFT: "Powered by KSoft.Si API",
        ADDMOD_COMMAND_DESCRIPTION:
          "Add a member/role as a moderator. If not set, anyone with the Manage Messages permission is considered a moderator",
        AUTOROLE_COMMAND_DESCRIPTION:
          "Automatically add a role to a user/bot when they join or when they send their first message with the --delay flag",
        AUTOROLE_ROLE_REQUIRED:
          "You can't automatically give nothing, you need to provide a role",
        AUTOROLE_INVALID_FLAGS: "You cannot combine --bot and --delay",
        AUTOROLE_DISABLED:
          "Autorole has been disabled, users will no longer receive a role upon join/first message.",
        AUTOROLE_DISABLED_BOT:
          "Autorole has been disabled, bots will no longer receive a role upon join.",
        AUTOROLE_ENABLED: (role: string, delay: boolean) =>
          `Autorole has been enabled, users will receive ${role} upon ${
            delay ? "first message" : "join"
          }.`,
        AUTOROLE_ENABLED_BOT: (role: string, delay: boolean) =>
          `Autorole has been enabled, bots will receive ${role} upon join.`,
        MODERATORS_ROLES: "Moderator Roles",
        NO_MODERATOR_ROLES: "No roles have been set as moderators.",
        MODERATORS_MEMBERS: "Moderator Members",
        NO_MODERATOR_MEMBERS: "No members have been set as moderators.",
        MODERATORS_REMOVE_INVALID: "Invalid Moderators",
        MODERATORS_REMOVED: (invalid: string[]) =>
          `I have removed some moderators as a matching role/member could not be found...\nThe removed ids are: ${invalid.join(
            ", "
          )}`,
        AUTODECANCER_COMMAND_DESCRIPTION: `Toggle renaming those with "cancerous" (non-ascii) names`,
        AUTODECANCER_ENABLED: `Enabled autodecancer. **New** users with "cancerous" (non-ascii) names will be renamed`,
        AUTODECANCER_DISABLED: `Disabled autodecancer. **New** users with "cancerous" (non-ascii) names will no longer be renamed`,
        AUTODEHOIST_COMMAND_DESCRIPTION:
          "Toggle renaming those with hoisted names",
        AUTODEHOIST_ENABLED:
          "Enabled autodehoist. **New** users with hoisted names will be renamed",
        AUTODEHOIST_DISABLED:
          "Disabled autodehoist. **New** users with hoisted names will no longer be renamed",
        AVATAR_COMMAND_DESCRIPTION: "Get a user's avatar",
        BADNAME_COMMAND_DESCRIPTION:
          "Change the name used for auto dehoist/decancer",
        BADNAME_NO_CHANGES: `I did absolutely nothing because that's already set as the "bad name"`,
        BADNAME_SET: (name: string) =>
          `I have set the "bad name" to \"${name}\". This will **not** rename existing users`,
        BADNAME_RESET: `I have reset the "bad name" to John Doe 0000 (with 0000 being their discriminator).
This will **not** rename existing users`,
        DEBUG_COMMAND_DESCRIPTION:
          "Command not working? Use this command to try debug the issue.\nDebug command not working? Join the Fire Support server, https://inv.wtf/fire",
        DEBUG_NO_COMMAND: "You must provide a valid command to debug",
        DEBUGGING_DEBUG: "Debug command is working",
        DEBUG_PERMS_PASS: "No permissions missing",
        DEBUG_REQUIRES_PERMS:
          "This command requires extra permissions. You'll need to debug in a server to see permission info",
        DEBUG_PERMS_CHECKS_FAIL: "Permission Checks Failed!",
        DEBUG_PERMS_FAIL: (userMissing: string[], clientMissing: string[]) => {
          return {
            user: userMissing.length
              ? `You are missing the permission${
                  userMissing.length > 1 ? "s" : ""
                } ${userMissing.join(", ")}`
              : null,
            client: clientMissing.length
              ? `I am missing the permission${
                  clientMissing.length > 1 ? "s" : ""
                } ${clientMissing.join(", ")}`
              : null,
          };
        },
        DEBUG_COMMAND_DISABLE_BYPASS:
          "Command is disabled but you are bypassed",
        DEBUG_COMMAND_DISABLED: "Command is disabled.",
        DEBUG_COMMAND_NOT_DISABLED: "Command is not disabled",
        DEBUG_MUTE_BYPASS: (channel: TextChannel, bypass: string[]) =>
          `The following users/roles will bypass mutes in ${channel}\n${bypass.join(
            ", "
          )}`,
        DEBUG_MUTE_NO_BYPASS: (channel: TextChannel) =>
          `Nobody can bypass mutes in ${channel}`,
        DEBUG_NO_EMBEDS: "I cannot send embeds",
        DEBUG_ISSUES: (issues: string[]) =>
          issues.length ? `${issues.length} issues found` : "No issues found",
        DESC_COMMAND_DESCRIPTION:
          "Set the description for the server that shows in Vanity URLs",
        DESC_NO_VANITY: (prefix: string) =>
          `You must set a vanity url with \`${prefix}vanityurl\` before you can set a description`,
        DESC_FAILED: "Failed to set guild description.",
        DESC_SET: "Successfully set guild description!",
        DESC_RESET: "Successfully reset guild description!",
        DEEPFRY_COMMAND_DESCRIPTION:
          "Deepfry an image or your avatar (your avatar is used if no argument is provided)",
        DEEPFRY_UPLOAD_FAIL: "Deepfry machine broke :(",
        DISCOVER_COMMAND_DESCRIPTION: "Links to Fire's public servers page",
        DISCOVER_MESSAGE: `You can find Fire\'s public server list at <${constants.url.discovery}>
Hint: Use the \`public\` command to get your server on the list`,
        STATUS_LATEST_INCIDENT: "Latest Incident",
        STATUSPAGE_PAGE_DESCRIPTIONS: {
          "all systems operational": "All Systems Operational",
          "partially degraded service": "Partially Degraded Service",
          "minor service outage": "Minor Service Outage",
          "partial system outage": "Partial System Outage",
          "service under maintenance": "Service Under Maintenance",
        },
        STATUSPAGE_INCIDENT_STATUS: {
          investigating: "Investigating",
          identified: "Identified",
          monitoring: "Monitoring",
          resolved: "Resolved",
          scheduled: "Scheduled",
          "in progress": "In Progress",
          verifying: "Verifying",
          completed: "Completed",
          postmortem: "Postmortem",
        },
        STATUSPAGE_COMPONENT_STATUS: {
          operational: "Operational",
          degraded_performance: "Degraded Performance",
          partial_outage: "Partial Outage",
          major_outage: "Major Outage",
          under_maintenance: "Under Maintenance",
        },
        DSTATUS_COMMAND_DESCRIPTION: "Get Discord's current status",
        DSTATUS_FETCH_FAIL: "Failed to fetch Discord status",
        STATUS_COMMAND_DESCRIPTION: "Get Fire's current status",
        STATUS_FETCH_FAIL: "Failed to fetch Fire status",
        EIGHTBALL_COMMAND_DESCRIPTION: "Ask the Magic 8-Ball a question",
        EIGHTBALL_NO_QUESTION:
          "That doesn't look like a question to me. Are you forgetting something?",
        EIGHTBALL_ANSWER: () => {
          const responses = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful.",
          ];
          return responses[Math.floor(Math.random() * responses.length)];
        },
        EVAL_COMMAND_DESCRIPTION: "run epic gamer code",
        EVAL_TOO_LONG: (haste?: string) =>
          haste
            ? `Output was too long, uploaded to hastebin; ${haste}`
            : `Output was too long, failed to upload to hastebin`,
        FILTER_INVITE_LOG_DESCRIPTION: (channel: TextChannel) =>
          `**Invite link sent in** ${channel}`,
        FILTER_INVITE_LOG_CODE: "Invite Code",
        GUILD_COMMAND_DESCRIPTION: "Get a general overview of the guild",
        GUILD_CREATED_AT: (guild: FireGuild, created: string) =>
          `**Created by ${
            guild.owner.user.discriminator != null
              ? guild.owner
              : "Unknown#0000"
          } ${created}**`,
        GOOGLE_COMMAND_DESCRIPTION: "Speak to the Google Assistant",
        GOOGLE_SOMETHING_WENT_WRONG:
          "<a:okaygoogle:769207087674032129> Something went wrong. Try again later",
        GUILD_JOIN_POS: (pos: number) => `**Your Join Position:** ${pos}`,
        GUILD_VERIF_VERY_HIGH: "**Extreme Verification Level**",
        GUILD_VERIF_HIGH: "**High Verification Level**",
        GUILD_VERIF_MEDIUM: "**Medium Verification Level**",
        GUILD_VERIF_LOW: "**Low Verification Level**",
        GUILD_VERIF_NONE: "**No Verification!**",
        GUILD_FILTER_ALL: "**Content Filter:** All Members",
        GUILD_FILTER_NO_ROLE: "**Content Filter:** Without Role",
        GUILD_FILTER_NONE: "**Content Filter:** Disabled",
        GUILD_NOTIFS_MENTIONS: "**Default Notifications:** Only @Mentions",
        GUILD_NOTIFS_ALL: "**Default Notifications:** All Messages",
        GUILD_MFA_ENABLED: "**Two-Factor Auth:** Enabled",
        GUILD_MFA_NONE: "**Two-Factor Auth:** Disabled",
        GUILD_ABOUT: "» About",
        GUILD_SECURITY: "» Security",
        GUILD_FEATURES: "» Features",
        GUILD_ROLES: "» Roles",
        HELP_COMMAND_DESCRIPTION:
          "Lists all of Fire's commands and provides information about them",
        HELP_FOOTER: (prefix: string, cluster: number) =>
          `Use "${prefix}help <command>" for more info about the command | Cluster ID: ${cluster}`,
        SK1ER_NO_REUPLOAD: (user: FireMember | FireUser) =>
          `${user} I am unable to read your log to remove sensitive information & provide solutions to your issue. Please upload the log directly :)`,
        SK1ER_REUPLOAD_FETCH_FAIL: (domain: string) =>
          `I was unable to read your log. Please upload it directly rather than using ${domain}`,
        SK1ER_LOG_READ_FAIL:
          "I was unable to read the attachment, try reupload it. If it still doesn't work, yell at Geek :)",
        SK1ER_MODCORE_ZIP: (user: FireMember | FireUser, zip: string) =>
          `${user}, Download the zip from ${zip} and then unzip it in \`.minecraft/modcore\` and your issue should be resolved.`,
        SK1ER_LOG_HASTE: (
          user: FireMember | FireUser,
          msgType: string,
          extra: string,
          haste: string,
          solutions: string
        ) => `${user} ${msgType} a log, ${extra}\n${haste}\n\n${solutions}`,
        SK1ER_NITRO_PERKS_REMOVED: (member: string) =>
          `${member}, Your nitro perks have been removed. Boost the server to get them back :)`,
        SK1ER_NITRO_PERKS_REMOVED_LEFT: (member: string) =>
          `${member} left and their nitro perks have been removed.`,
        INVITE_COMMAND_DESCRIPTION:
          "Sends a link to invite me to a different Discord server.",
        LANGUAGE_COMMAND_DESCRIPTION:
          "Set the language Fire uses. You can add/improve languages on the GitHub repo, https://inv.wtf/github",
        LANGUAGE_COMMAND_CURRENT: (
          language: string // should always say it in the current language
        ) =>
          `The current language is ${language}. You can set the language to any of the following...\n${this.client.languages.modules
            .keyArray()
            .join(
              ", "
            )}\n\nNote: Some languages may be unfinished so sometimes you'll see some English if the string hasn't been translated`,
        LANGUAGE_COMMAND_HELLO: (type: "guild" | "user") =>
          type == "user"
            ? "Hello! You have successfully set Fire's language to English (US) :D"
            : "Hello! You have successfully set Fire's language in this guild to English (US). Want to set it just for you? Run the command in DMs",
        LEVELHEAD_COMMAND_DESCRIPTION: "Get a player's levelhead info",
        LEVELHEAD_NO_PLAYER:
          "You need to give a player for me to check the levelhead of",
        LEVELHEAD_FETCH_FAIL: "Failed to fetch levelhead info",
        LEVELHEAD_MALFORMED_UUID:
          "Malformed UUID. Check the spelling of the player's name",
        LEVELHEAD_PURCHASED: "Purchased",
        LEVELHEAD_NOT_PURCHASED: "Not Purchased",
        LEVELHEAD_EMBED_TITLE: (player: string) => `${player}'s Levelhead`,
        LEVELHEAD_PROPOSED: "Proposed Levelhead",
        LEVELHEAD_DENIED: "Denied",
        LEVELHEAD_OTHER: "Other Items",
        LEVELHEAD_TAB: "Tab",
        LEVELHEAD_CHAT: "Chat",
        LEVELHEAD_ADDON_LAYERS: "Addon Head Layers",
        LYRICS_COMMAND_DESCRIPTION:
          'Get the lyrics for a song. (For best results, use the format "artist_name song_title")',
        LYRICS_NO_QUERY:
          'You need to provide a song to get the lyrics for. For best results, use the format "artist_name song_title"',
        LYRICS_NOT_FOUND: (error?: any) =>
          error && error == "Error: No results"
            ? `I couldn't find any lyrics for that song`
            : `An error occurred while trying to fetch lyrics.`,
        LYRICS_TITLE: (title: string, artist: string) =>
          `${title} by ${artist}`,
        MAKEAMEME_COMMAND_DESCRIPTION:
          'Make your own meme using the "top text bottom text" format',
        MAKEAMEME_NO_IMAGE:
          "You need to provide a member (to use their avatar), image url or attach an image to make a meme",
        MAKEAMEME_NO_TEXT: "You must provide text separated by **|**",
        MAKEAMEME_UPLOAD_FAIL: "Failed to upload spicy meme :(",
        MEME_COMMAND_DESCRIPTION: "Get a random meme",
        MEME_NOT_FOUND: (error?: any) =>
          error && error == "Error: subreddit not found"
            ? `I couldn't find any memes. Here's an idea! Try a subreddit that actually exists next time ;)`
            : `An error occurred while trying to fetch some spicy memes.`,
        MEME_NSFW_FORBIDDEN:
          "The meme I was given was marked as NSFW but this channel is not. If you're looking for NSFW memes, head to an NSFW channel, otherwise just try again",
        MEME_EMBED_TITLE: "Did someone order a spicy meme?",
        MEME_EMBED_AUTHOR: (user: FireUser) => `Requested by ${user}`,
        MEME_SUBREDDIT: "Subreddit",
        MODONLY_COMMAND_DESCRIPTION:
          "Set channels to restrict commands for moderators",
        MODONLY_NO_CHANNELS:
          "You must provide valid channel(s) separated by a comma or space for me to toggle moderator only mode in.",
        MODONLY_SET: (channels: string) =>
          `Commands can now only be run by moderators (either those set as mods or those with manage messages) in;\n${channels}.`,
        MODONLY_RESET: "Moderator only channels have been reset",
        ADMINONLY_COMMAND_DESCRIPTION:
          "Set channels to restrict commands for admins",
        ADMINONLY_NO_CHANNELS:
          "You must provide valid channel(s) separated by a comma or space for me to toggle admin only mode in.",
        ADMINONLY_SET: (channels: string) =>
          `Commands can now only be run by those with the "Manage Server" permission in;\n${channels}.`,
        ADMINONLY_RESET: "Admin only channels have been reset",
        MCSTATUS_COMMAND_DESCRIPTION: "Check the status of Minecraft services",
        MCSTATUS_FETCH_FAIL: "Failed to fetch Minecraft status",
        MCSTATUS_STATUSES: {
          green: "No Issues",
          yellow: "Some Issues",
          red: "Service Unavailable",
        },
        MCSTATUS_SERVICES: {
          "minecraft.net": "**Website**",
          "sessionserver.mojang.com": "**Sessions**",
          "authserver.mojang.com": "**Auth**",
          "textures.minecraft.net": "**Skins**",
          "api.mojang.com": "**API**",
        },
        MCUUID_COMMAND_DESCRIPTION:
          "Get a player's UUID (use --dashed to get the uuid with dashes)",
        MCUUID_INVALID_IGN: "You must provide a valid IGN to get the UUID of",
        MCUUID_FETCH_FAIL:
          "Failed to fetch the UUID, make sure the IGN is a valid player",
        MCUUID_UUID: (ign: string, uuid: string) =>
          `${ign} has the UUID ${uuid}`,
        MOD_COMMAND_DESCRIPTION: "Get information about a Sk1er LLC mod",
        MOD_INVALID: "You must provide a valid mod",
        MODCORE_COMMAND_DESCRIPTION: "Get a player's modcore profile",
        MODCORE_INVALID_IGN:
          "You must provide a valid IGN to get the ModCore profile of",
        MODCORE_PROFILE_FETCH_FAIL: "Failed to fetch that player's profile",
        MODCORE_PROFILE_TITLE: (player: string) =>
          `${player}'s ModCore Profile`,
        MODCORE_ENABLED_COSMETICS: "Enabled Cosmetics",
        MODCORE_NO_COSMETICS: "No Cosmetics",
        NITROPERKS_COMMAND_DESCRIPTION:
          "Claim nitro perks for a Minecraft account (locked to discord.gg/sk1er)",
        NITROPERKS_INVALID_IGN:
          "You must provide a valid IGN to claim nitro perks.",
        NITROPERKS_MODULE_ERROR:
          "I can't give nitro perks as the Sk1er module hasn't been loaded, <@287698408855044097> probably broke something...",
        NITROPERKS_FAILED:
          "Failed to give nitro perks! Make sure your IGN is valid and you've purchased the game.\nThere may also be an issue with the Mojang API or Sk1er's API causing this issue",
        OSS_COMMAND_DESCRIPTION: "Sends my GitHub repo link",
        OSS_MESSAGE:
          "You can find Fire's source code at <https://github.com/FireDiscordBot/bot/tree/rewrite/typescript>",
        PING_COMMAND_DESCRIPTION: "Shows you my ping to discord's servers",
        PING_INITIAL_MESSAGE: "Pinging...",
        PING_FOOTER: (shard: number, cluster: number) =>
          `Shard ID: ${shard} | Cluster ID: ${cluster}`,
        PING_FINAL_MESSAGE: "Pong!",
        PUBLIC_COMMAND_DESCRIPTION:
          "Set your server to public which allows it to be visible on Fire's Public Servers page (https://inv.wtf/discover)",
        PUBLIC_VANITY_BLACKLIST:
          "This guild has been blacklisted from vanity features and therefore cannot be public!",
        PUBLIC_VANITY_REQUIRED: (prefix: string) =>
          `You must set a vanity url with \`${prefix}vanityurl\` before your guild can be public`,
        PUBLIC_ENABLED: (vanity: string) =>
          `Your guild is now public & visible on <https://inv.wtf/discover>.
People will be able to use your guild's vanity url (<https://inv.wtf/${vanity}>) to join`,
        PUBLIC_ENABLED_LOG: (user: FireMember) =>
          `${constants.statuspage.emojis.operational} Ths server was set to public by ${user} and will appear on Fire\'s public server list`,
        PUBLIC_DISABLED:
          "Your guild is no longer public and will no longer show on the Fire website",
        PUBLIC_DISABLED_LOG: (user: FireMember) =>
          `${constants.statuspage.emojis.major_outage} Ths server was manually removed from Fire\'s public server list by ${user}`,
        PLONK_COMMAND_DESCRIPTION:
          "make a user unable to use the best discord bot",
        PURGE_COMMAND_DESCRIPTION:
          "Bulk delete messages with optional flags to selectively delete messages based on certain factors",
        PURGE_AMOUNT_INVALID: "Invalid amount. Minumum is 2, Maximum is 500",
        PURGE_HISTORY_FAIL: "Failed to fetch messages",
        PURGE_SUCCESS: (messages: number) =>
          `Successfully deleted **${messages}** messages!`,
        PURGE_FAIL: "Failed to purge messages...",
        PURGE_LOG_DESCRIPTION: (amount: number, channel: TextChannel) =>
          `**${amount} messages were purged in ${channel}**`,
        PURGE_LOG_FOOTER: (user: FireUser, channel: TextChannel) =>
          `Author ID: ${user.id} | Channel ID: ${channel.id}"`,
        PURGED_MESSAGES: "Purged Messages",
        PURGED_MESSAGES_FAILED: "Failed to upload messages to hastebin",
        RANK_COMMAND_DESCRIPTION:
          "List all available ranks and join a rank if provided",
        RANKS_NONE_FOUND: "Seems like there's no ranks set for this guild",
        RANKS_INFO: (role: Role) =>
          `> ${role} (${role.members.size.toLocaleString(this.id)} members)`,
        RANKS_AUTHOR: (guild: FireGuild) => `${guild}'s ranks`,
        RANKS_JOIN_REASON: "Joined rank",
        RANKS_JOIN_RANK: (role: string) =>
          `You successfully joined the **${role}** rank.`,
        RANKS_LEAVE_REASON: "Left rank",
        RANKS_LEFT_RANK: (role: string) =>
          `You successfully left the **${role}** rank.`,
        RANKS_INVALID_ROLE:
          "That isn't a valid rank. Use the command without arguments to see a list of valid ranks",
        RANKS_INVALID_ROLE_DEL:
          "That isn't a valid rank. Use the rank command to see a list of valid ranks",
        RANKS_SK1ER_NO_SPECS: (
          mention: string
        ) => `${mention} To become a beta tester, please provide your specs through this form: 
<https://inv.wtf/sk1spec>
                
You will automatically gain access to beta channels after filling in the form`,
        ADDRANK_COMMAND_DESCRIPTION:
          "Add a role that users can join through the rank command.",
        RANKS_ALREADY_ADDED: "You can't add a rank twice silly",
        DELRANK_COMMAND_DESCRIPTION:
          "Remove a rank from the list of joinable roles.",
        SKIN_COMMAND_DESCRIPTION: "See a player's Minecraft skin",
        SKIN_INVALID_IGN: "You must provide a valid IGN to get the skin of",
        SLOWMODE_COMMAND_DESCRIPTION:
          "Set the slowmode for a channel or category. Use the --global flag to set it for all channels",
        SLOWMODE_INVALID_TYPE: "You must provide a text channel or category",
        SLOWMODE_FAILED: (channels: string[]) =>
          `Failed to set slowmode in ${channels.join(", ")}`,
        SLOWMODE_GLOBAL_FAIL_SOME: (failed: string[]) =>
          `I set slowmode in some channels but failed to set slowmode in ${failed.join(
            ", "
          )}`,
        STATS_COMMAND_DESCRIPTION:
          "View cluster & overall stats. Use the --cluster flag to view stats for a specific cluster",
        STATS_TITLE: (name: string, version: string) =>
          `Stats for ${name} [${version}]`,
        STATS_MEMORY_USAGE: "Memory Usage",
        STATS_DJS_VER: "Discord.JS Version",
        STATS_NODE_VER: "Node.JS Version",
        STATS_UPTIME: "Uptime",
        STATS_COMMANDS: "Commands",
        STATS_EVENTS: "Events",
        STATS_FOOTER: (message: FireMessage) =>
          `PID: ${process.pid} | Cluster: ${
            message.client.manager.id
          } | Shard: ${message?.guild?.shardID || 0}`,
        SPECS_COMMAND_DESCRIPTION:
          "View/remove a users specs (locked to discord.gg/sk1er)",
        SPECS_NOT_FOUND:
          "Specs not found for that user. Tell them to fill in this form\n<https://inv.wtf/sk1spec>",
        STEAL_COMMAND_DESCRIPTION: "Steal an emote to use in your own server",
        STEAL_NOTHING:
          "You're a terrible criminal, you can't steal nothing! You must provide an emoji to steal",
        STEAL_INVALID_EMOJI:
          "If you're going to try and steal an emoji, at least make it a valid one...\nOtherwise it's a waste of time and you'll likely get caught ¯\\_(ツ)_/¯",
        STEAL_CAUGHT:
          "Seems like you were caught red handed while trying to steal that emoji. You have returned the emoji you attempted to steal",
        STEAL_STOLEN: (emoji: string) =>
          `Nice! You stole ${emoji} without getting caught by a nasty error :)`,
        SUGGEST_COMMAND_DESCRIPTION:
          "Suggest a feature for Fire. (Abuse of this command will lead to a temporary blacklist from Fire. Actual suggestions only)",
        SUGGESTION_SUCCESS: (card: any) =>
          `Thanks! Your suggestion was added to the Trello @ <${card.url}>. Make sure to check it every now and then for a response.
Abuse of this command __**will**__ result in being temporarily blacklisted from Fire`,
        USER_COMMAND_DESCRIPTION: "Get a general overview of a user.",
        USER_KSOFT_BANNED: (ban: Ban) =>
          `Banned on [KSoft.Si](https://bans.ksoft.si/share?user=${ban.user.id}) for ${ban.reason} - [Proof](${ban.proof})`,
        VOTE_COMMAND_DESCRIPTION:
          'Sends a link to Fire on a random bot list (sends direct vote link if you use the "vote" alias)',
        PREMIUM_COMMAND_DESCRIPTION: "i like money",
        PREMIUM_MISSING_ARGUMENTS:
          "You need to provide a guild id, user id and reason to add a premium guild",
        PREMIUM_DELETE_FAIL: "Failed to remove premium.",
        PREMIUM_INSERT_FAIL: "Failed to give premium.",
        PREMIUM_RELOAD_FAIL: "Failed to reload premium guilds",
        RELOAD_COMMAND_DESCRIPTION: "reload a command/language/listener/module",
        TAG_COMMAND_DESCRIPTION: "See a list of all tags or view a tag",
        TAG_NONE_FOUND:
          "I searched near and far and could not find any tags...",
        TAG_INVALID_TAG: (tag: string) =>
          `There doesn't seem to be a tag called ${tag}. Run the command again with no arguments to see all tags`,
        TAGS_RAW_MISSING_ARG:
          "You need to provide a tag name to get the raw content of",
        TAGS_DELETE_MISSING_ARG:
          "Well, I can't really delete nothing can I? Provide a tag name to delete",
        TAGS_CREATE_MISSING_NAME:
          "Your shiny new tag needs a name, give it one!",
        TAGS_CREATE_MISSING_CONTENT:
          "A tag can't be empty, otherwise it has no purpose in life, like me...",
        TAGS_CREATE_COMMAND_NAME:
          "That name is already being used by a subcommand, try a different one",
        TAGS_CREATE_ALREADY_EXISTS:
          "A tag already exists with that name. Be original next time!",
        TAGS_CREATE_LIMIT:
          "You've reached the tag limit! Upgrade to premium for unlimited tags;\n<https://inv.wtf/premium>",
        TAGS_EDIT_MISSING_NAME:
          "I need to know what tag to edit. Give me the name of an existing tag",
        TAGS_EDIT_MISSING_CONTENT:
          "You need to provide the new content for the tag",
        TAGS_ALIAS_MISSING_NAME:
          "I can't make an alias for nothing. You need to provide an existing tag name",
        TAGS_ALIAS_MISSING_ALIAS:
          "You need to provide a new alias for the tag or an existing alias to delete it",
        TAG_LIST: (guild: string) => `${guild}'s tags`,
      },
      enabled: true,
    });
  }
}
