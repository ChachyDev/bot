import { FireMember } from "../../lib/extensions/guildmember";
import { Listener } from "../../lib/util/listener";
import { TextChannel } from "discord.js";
import Sk1er from "../modules/sk1er";

export default class TicketClose extends Listener {
  constructor() {
    super("ticketClose", {
      emitter: "client",
      event: "ticketClose",
    });
  }

  async exec(creator: FireMember) {
    const sk1erModule = this.client.getModule("sk1er") as Sk1er;
    if (creator.guild.id != sk1erModule.supportGuildId) return;
    const channel =
      sk1erModule.supportChannel ||
      (sk1erModule.supportGuild.channels.cache.get(
        sk1erModule.supportChannelId
      ) as TextChannel);
    if (!channel)
      return this.client.console.warn(
        `[Sk1er] Support channel doesn't exist in cache, unable to remove overwrite for ${creator}`
      );
    if (channel.permissionOverwrites.has(creator.id)) {
      this.client.console.log(
        `[Sk1er] Removing support overwrite for ${creator}...`
      );
      await channel.permissionOverwrites
        .get(creator.id)
        .delete()
        .catch(() =>
          this.client.console.warn(
            `[Sk1er] Failed to remove overwrite for ${creator}`
          )
        );
    }
  }
}
