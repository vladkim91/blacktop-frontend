<template>
  <div class="game-ui">
    <div class="restart-container">
      <button @click="restartGame" class="restart-button">Restart Game</button>
    </div>
    <div class="middle-container">
      <!-- Home Team Section -->
      <div class="team">
        <h2>Home</h2>
        <div
          v-for="player in teams.teamOne"
          :key="player.id"
          class="player-row"
        >
          <div class="player-name">{{ player.name }}</div>
          <div class="stat-box">
            <table>
              <thead>
                <tr>
                  <th>FGM/FGA</th>
                  <th>FG%</th>
                  <th>3PM/3PA</th>
                  <th>3P%</th>
                  <th>Points</th>
                  <th>Reb</th>
                  <th>Ast</th>
                  <th>Stl</th>
                  <th>Blk</th>
                  <th>TO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {{
                      playerStatTemplate.teamOne[player.name].fgm +
                      '/' +
                      playerStatTemplate.teamOne[player.name].fga
                    }}
                  </td>
                  <td>
                    {{
                      playerStatTemplate.teamOne[player.name].fga > 0
                        ? Math.ceil(
                            (playerStatTemplate.teamOne[player.name].fgm /
                              playerStatTemplate.teamOne[player.name].fga) *
                              100
                          ) + '%'
                        : '0%'
                    }}
                  </td>
                  <td>
                    {{
                      playerStatTemplate.teamOne[player.name].threeM +
                      '/' +
                      playerStatTemplate.teamOne[player.name].threeA
                    }}
                  </td>
                  <td>
                    {{
                      playerStatTemplate.teamOne[player.name].threeA > 0
                        ? Math.ceil(
                            (playerStatTemplate.teamOne[player.name].threeM /
                              playerStatTemplate.teamOne[player.name].threeA) *
                              100
                          ) + '%'
                        : '0%'
                    }}
                  </td>
                  <td>{{ playerStatTemplate.teamOne[player.name].points }}</td>
                  <td>
                    {{ playerStatTemplate.teamOne[player.name].rebounds }}
                  </td>
                  <td>{{ playerStatTemplate.teamOne[player.name].assists }}</td>
                  <td>{{ playerStatTemplate.teamOne[player.name].steals }}</td>
                  <td>{{ playerStatTemplate.teamOne[player.name].blocks }}</td>
                  <td>
                    {{ playerStatTemplate.teamOne[player.name].turnovers }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Team Totals -->
        <div class="team-totals">
          <h3>TOTAL</h3>
          <table>
            <thead>
              <tr>
                <th>FGM/FGA</th>
                <th>FG%</th>
                <th>3PM/3PA</th>
                <th>3P%</th>
                <th>Points</th>
                <th>Reb</th>
                <th>Ast</th>
                <th>Stl</th>
                <th>Blk</th>
                <th>TO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ teamStats.teamOne.fgm }}/{{ teamStats.teamOne.fga }}</td>
                <td>
                  {{
                    teamStats.teamOne.fga > 0
                      ? Math.ceil(
                          (teamStats.teamOne.fgm / teamStats.teamOne.fga) * 100
                        ) + '%'
                      : '0%'
                  }}
                </td>
                <td>
                  {{ teamStats.teamOne.threeM }}/{{ teamStats.teamOne.threeA }}
                </td>
                <td>
                  {{
                    teamStats.teamOne.threeA > 0
                      ? Math.ceil(
                          (teamStats.teamOne.threeM /
                            teamStats.teamOne.threeA) *
                            100
                        ) + '%'
                      : '0%'
                  }}
                </td>
                <td>{{ teamStats.teamOne.points }}</td>
                <td>{{ teamStats.teamOne.rebounds }}</td>
                <td>{{ teamStats.teamOne.assists }}</td>
                <td>{{ teamStats.teamOne.steals }}</td>
                <td>{{ teamStats.teamOne.blocks }}</td>
                <td>{{ teamStats.teamOne.turnovers }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="center">
        <div class="score">
          {{ gameScore.teamOne }} : {{ gameScore.teamTwo }}
        </div>
        <div class="ball">
          <img src="../assets/ball.png" alt="Basketball" />
        </div>
      </div>

      <!-- Away Team Section -->
      <div class="team">
        <h2>Away</h2>
        <div
          v-for="player in teams.teamTwo"
          :key="player.id"
          class="player-row"
        >
          <div class="player-name">{{ player.name }}</div>
          <div class="stat-box">
            <table>
              <thead>
                <tr>
                  <th>FGM/FGA</th>
                  <th>FG%</th>
                  <th>3PM/3PA</th>
                  <th>3P%</th>
                  <th>Points</th>
                  <th>Reb</th>
                  <th>Ast</th>
                  <th>Stl</th>
                  <th>Blk</th>
                  <th>TO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {{
                      playerStatTemplate.teamTwo[player.name].fgm +
                      '/' +
                      playerStatTemplate.teamTwo[player.name].fga
                    }}
                  </td>
                  <td>
                    {{
                      playerStatTemplate.teamTwo[player.name].fga > 0
                        ? Math.ceil(
                            (playerStatTemplate.teamTwo[player.name].fgm /
                              playerStatTemplate.teamTwo[player.name].fga) *
                              100
                          ) + '%'
                        : '0%'
                    }}
                  </td>
                  <td>
                    {{
                      playerStatTemplate.teamTwo[player.name].threeM +
                      '/' +
                      playerStatTemplate.teamTwo[player.name].threeA
                    }}
                  </td>
                  <td>
                    {{
                      playerStatTemplate.teamTwo[player.name].threeA > 0
                        ? Math.ceil(
                            (playerStatTemplate.teamTwo[player.name].threeM /
                              playerStatTemplate.teamTwo[player.name].threeA) *
                              100
                          ) + '%'
                        : '0%'
                    }}
                  </td>
                  <td>{{ playerStatTemplate.teamTwo[player.name].points }}</td>
                  <td>
                    {{ playerStatTemplate.teamTwo[player.name].rebounds }}
                  </td>
                  <td>{{ playerStatTemplate.teamTwo[player.name].assists }}</td>
                  <td>{{ playerStatTemplate.teamTwo[player.name].steals }}</td>
                  <td>{{ playerStatTemplate.teamTwo[player.name].blocks }}</td>
                  <td>
                    {{ playerStatTemplate.teamTwo[player.name].turnovers }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Team Totals -->
        <div class="team-totals">
          <h3>TOTAL</h3>
          <table>
            <thead>
              <tr>
                <th>FGM/FGA</th>
                <th>FG%</th>
                <th>3PM/3PA</th>
                <th>3P%</th>
                <th>Points</th>
                <th>Reb</th>
                <th>Ast</th>
                <th>Stl</th>
                <th>Blk</th>
                <th>TO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ teamStats.teamTwo.fgm }}/{{ teamStats.teamTwo.fga }}</td>
                <td>
                  {{
                    teamStats.teamTwo.fga > 0
                      ? Math.ceil(
                          (teamStats.teamTwo.fgm / teamStats.teamTwo.fga) * 100
                        ) + '%'
                      : '0%'
                  }}
                </td>
                <td>
                  {{ teamStats.teamTwo.threeM }}/{{ teamStats.teamTwo.threeA }}
                </td>
                <td>
                  {{
                    teamStats.teamTwo.threeA > 0
                      ? Math.ceil(
                          (teamStats.teamTwo.threeM /
                            teamStats.teamTwo.threeA) *
                            100
                        ) + '%'
                      : '0%'
                  }}
                </td>
                <td>{{ teamStats.teamTwo.points }}</td>
                <td>{{ teamStats.teamTwo.rebounds }}</td>
                <td>{{ teamStats.teamTwo.assists }}</td>
                <td>{{ teamStats.teamTwo.steals }}</td>
                <td>{{ teamStats.teamTwo.blocks }}</td>
                <td>{{ teamStats.teamTwo.turnovers }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="log-container">
      <div class="log-row" v-for="(log, index) in gameLog" :key="index">
        <!-- Home Log -->
        <div class="log-entry home-log" v-if="log.team === 'home'">
          <span class="team-log home">{{ log.message }}</span>
        </div>
        <div class="log-empty" v-else></div>

        <!-- Score in the Middle (only for scoring events) -->
        <div class="log-score" v-if="log.score">
          <span>{{ log.score }}</span>
        </div>
        <div class="log-empty" v-else></div>

        <!-- Away Log -->
        <div class="log-empty" v-if="log.team === 'home'"></div>
        <div class="log-entry away-log" v-else>
          <span class="team-log away">{{ log.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  GetTeamById,
  UpdateTeamById,
  CreateGame
  // GetTeamByNameAndPassword
} from '../services/routes.js';
export default {
  mounted() {
    this.countdown();
    // setTimeout(this.startGame(), 5000)
  },
  components: {},
  data() {
    return {
      gameObject: {},
      gameLog: [],
      homeLog: [],
      awayLog: [],
      record: {},
      possession: null,
      gameInProgress: false,
      teamStats: {
        teamOne: {
          points: 0,
          rebounds: 0,
          assists: 0,
          steals: 0,
          blocks: 0,
          turnovers: 0,
          fgm: 0,
          fga: 0,
          threeA: 0,
          threeM: 0
        },
        teamTwo: {
          points: 0,
          rebounds: 0,
          assists: 0,
          steals: 0,
          blocks: 0,
          turnovers: 0,
          fgm: 0,
          fga: 0,
          threeA: 0,
          threeM: 0
        }
      },
      gameScore: {
        teamOne: 0,
        teamTwo: 0
      }
    };
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    },
    playerStatTemplate() {
      return this.assignToTeams(this.teams.teamOne, this.teams.teamTwo);
    }
  },
  methods: {
    restartGame() {
      // Reset scores
      this.gameScore = { teamOne: 0, teamTwo: 0 };

      // Clear logs
      this.gameLog = [];
      this.homeLog = [];
      this.awayLog = [];

      // Reset team stats
      this.teamStats = {
        teamOne: {
          points: 0,
          rebounds: 0,
          assists: 0,
          steals: 0,
          blocks: 0,
          turnovers: 0,
          fgm: 0,
          fga: 0,
          threeA: 0,
          threeM: 0
        },
        teamTwo: {
          points: 0,
          rebounds: 0,
          assists: 0,
          steals: 0,
          blocks: 0,
          turnovers: 0,
          fgm: 0,
          fga: 0,
          threeA: 0,
          threeM: 0
        }
      };

      const initialTeams = {
        teamOne: this.$store.state.teams.teamOne.map((player) => ({
          ...player,
          stats: {
            points: 0,
            rebounds: 0,
            assists: 0,
            steals: 0,
            blocks: 0,
            turnovers: 0,
            fgm: 0,
            fga: 0,
            threeA: 0,
            threeM: 0
          }
        })),
        teamTwo: this.$store.state.teams.teamTwo.map((player) => ({
          ...player,
          stats: {
            points: 0,
            rebounds: 0,
            assists: 0,
            steals: 0,
            blocks: 0,
            turnovers: 0,
            fgm: 0,
            fga: 0,
            threeA: 0,
            threeM: 0
          }
        }))
      };

      this.$store.commit('resetTeams', initialTeams);

      // Reset player stats
      this.playerStatTemplate = this.assignToTeams(
        this.teams.teamOne,
        this.teams.teamTwo
      );

      // Reset possession and game state
      this.possession = null;
      this.gameInProgress = false;
      this.startGame();
    },
    addLog(team, message, isScoringEvent = false) {
      const logEntry = {
        team,
        message
      };

      // Add score only for scoring events
      if (isScoringEvent) {
        logEntry.score = `${this.gameScore.teamOne}:${this.gameScore.teamTwo}`;
      }

      this.gameLog.unshift(logEntry);

      if (team === 'home') {
        this.homeLog.unshift(message);
      } else if (team === 'away') {
        this.awayLog.unshift(message);
      }
    },

    countdown() {
      this.startGame();
    },
    getPlayerOverall() {},
    startGame() {
      this.gameInProgress = true;
      this.gameCycle();
    },
    jumpBall() {
      const [playerOne, playerTwo] = this.getTallest();
      const p1v = playerOne.height * playerOne.attributes.physical.vertical;
      const p2v = playerTwo.height * playerTwo.attributes.physical.vertical;
      const percentage = [
        parseFloat((p1v / (p1v + p2v)).toFixed(2)),
        parseFloat((p2v / (p1v + p2v)).toFixed(2))
      ];
      if (parseFloat(Math.random().toFixed(2)) < percentage[0]) {
        this.possession = 0;
        this.gameLog.unshift(`${playerOne.name} won the tip! `);
      } else {
        this.possession = 1;
        this.gameLog.unshift(`${playerTwo.name} won the tip! `);
      }
    },

    getTallest() {
      const tallestOne = this.teams.teamOne.sort((a, b) => {
        return b.height - a.height;
      })[0];
      const tallestTwo = this.teams.teamTwo.sort((a, b) => {
        return b.height - a.height;
      })[0];

      return [tallestOne, tallestTwo];
    },

    checkShootPass(team) {
      const playerTendencies = []; // Array to store tendencies for all players

      team.forEach((player) => {
        let totalTendency = 0;
        const offensiveTendencies = player.tendencies.offense;

        for (const property in offensiveTendencies) {
          if (property === 'pass' || property === 'set_screen') continue;

          totalTendency += parseInt(offensiveTendencies[property]);
        }

        playerTendencies.push(totalTendency); // Add the player's total tendency to the array
      });

      // Dynamically calculate shot tendencies for any number of players
      return this.calcShotTendencies(...playerTendencies);
    },

    calcShotTendencies(...tendencies) {
      const totalTendency = tendencies.reduce(
        (sum, tendency) => sum + tendency,
        0
      ); // Calculate the total tendency
      const probabilities = tendencies.map(
        (tendency) => tendency / totalTendency
      ); // Calculate individual probabilities

      const chance = Math.random(); // Generate a random number between 0 and 1
      let cumulativeProbability = 0;

      // Iterate over probabilities and find the player whose range matches the chance
      for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (chance <= cumulativeProbability) {
          return i; // Return the index of the selected player
        }
      }

      return probabilities.length - 1; // Fallback in case of rounding errors
    },
    pickTypeOfShot(player) {
      let rim = 0;
      let mid = 0;
      let three = 0;
      let post = 0;
      for (const property in player.tendencies.offense) {
        if (property === 'pass' || property === 'set_screen') {
          continue;
        } else if (property == 'attack_rim') {
          rim += player.tendencies.offense[property];
        } else if (property == 'shoot_mid') {
          mid += player.tendencies.offense[property];
        } else if (property == 'shoot_three') {
          three += player.tendencies.offense[property];
        } else {
          post += player.tendencies.offense[property];
        }
      }

      return this.calcChanceShotType(rim, mid, three, post);
    },
    calcChanceShotType(shot1, shot2, shot3, shot4) {
      const sum = shot1 + shot2 + shot3 + shot4;
      const rim = parseFloat((shot1 / sum).toFixed(2));
      const mid = parseFloat((shot2 / sum).toFixed(2));
      const three = parseFloat((shot3 / sum).toFixed(2));
      const post = parseFloat((shot4 / sum).toFixed(2));
      const chance = Math.random().toFixed(2);

      if (chance < rim) {
        return 'attack_rim';
      } else if (chance >= rim && chance < rim + mid) {
        return 'shoot_mid';
      } else if (chance >= rim + mid && chance < rim + mid + three) {
        return 'shoot_three';
      } else if (chance >= 1 - post) {
        return 'post_up';
      }
    },
    shootBall(player, type, matchup) {
      const defaultPercentages = [0.45, 0.35, 0.27, 0.4];
      let percentage;
      let defensiveContest;
      let layupDunk = '';

      switch (type) {
        case 'attack_rim':
          defensiveContest =
            (matchup.attributes.defense.inside_defense +
              matchup.attributes.physical.vertical +
              matchup.tendencies.defense.block) /
            3;
          layupDunk = this.layupOrDunk(
            player.attributes.offense.dunk,
            defensiveContest
          );
          percentage = this.calcAttackRim(
            defensiveContest,
            player.attributes.offense[layupDunk],
            defaultPercentages[0]
          );
          break;
        case 'shoot_mid':
          defensiveContest =
            (matchup.attributes.defense.outside_defense +
              matchup.attributes.physical.vertical +
              matchup.tendencies.defense.block) /
            3;
          percentage = this.calcShotPercentage(
            defensiveContest,
            player.attributes.offense.mid_range,
            defaultPercentages[1]
          );
          break;
        case 'shoot_three':
          defensiveContest =
            (matchup.attributes.defense.outside_defense +
              matchup.attributes.physical.vertical +
              matchup.tendencies.defense.block) /
            3;
          percentage = this.calcShotPercentage(
            defensiveContest,
            player.attributes.offense.three,
            defaultPercentages[2]
          );
          break;
        case 'post_up':
          defensiveContest =
            (matchup.attributes.defense.post_defense +
              matchup.attributes.defense.inside_defense +
              matchup.attributes.physical.vertical) /
            3;
          percentage = this.calcAttackRim(
            defensiveContest,
            player.attributes.offense.post_shot,
            defaultPercentages[3]
          );
          break;
      }

      const makeOrMiss = this.shoot(percentage);

      if (makeOrMiss === 'make') {
        const points = type === 'shoot_three' ? 3 : 2;
        this.updateScoreAndLog(player, points, type);
      } else {
        this.updateMissedShotStats(player, type);
        this.rebound(this.teams.teamOne, this.teams.teamTwo);
      }
    },
    layupOrDunk(dunk, defensiveRating) {
      const dunkPenalty = parseFloat(
        (dunk / (dunk + defensiveRating)).toFixed(2)
      );
      const layupChance = 1 - dunkPenalty + 0.15;
      const chance = Math.random().toFixed(2);

      return chance < layupChance ? 'layup' : 'dunk';
    },
    calcAttackRim(defense, offense, defaultPercentage) {
      const multiplier =
        parseFloat(
          (offense / (defense + offense) / defaultPercentage).toFixed(2)
        ) - 0.1;

      return parseFloat((defaultPercentage * multiplier).toFixed(2));
    },
    calcShotPercentage(defense, offense, defaultPercentage) {
      const multiplier =
        parseFloat(
          (offense / (defense + offense) / defaultPercentage).toFixed(2)
        ) - 0.1;
      return parseFloat((defaultPercentage * multiplier).toFixed(2));
    },

    shoot(percentage) {
      const chance = Math.random().toFixed(2);
      if (chance < percentage) {
        return 'make';
      } else if (chance > percentage) {
        return 'miss';
      }
    },
    rebound(team1, team2) {
      // Helper function to calculate rebound chances
      const calcRebound = (team) => {
        let def = 0;
        let off = 0;
        team.forEach((player) => {
          def += player.attributes.defense.def_rebound;
          off += player.attributes.offense.off_rebound;
        });
        const teamDefRebound = parseFloat((def / 300).toFixed(2));
        const teamOffRebound = parseFloat((off / 300).toFixed(2));
        return [teamDefRebound, teamOffRebound];
      };

      // Calculate rebound chances for both teams
      const [teamOneDefRebound, teamOneOffRebound] = calcRebound(team1);
      const [teamTwoDefRebound, teamTwoOffRebound] = calcRebound(team2);

      const scalingFactor = 0.32; // Penalize offensive rebounds

      const chance = Math.random().toFixed(2);
      let rebounder;

      if (this.possession === 0) {
        // Team 1 (Home) is on offense
        const offensiveReboundChance = parseFloat(
          (
            (teamOneOffRebound * scalingFactor) /
            (teamOneOffRebound * scalingFactor + teamTwoDefRebound)
          ).toFixed(2)
        );

        if (chance < offensiveReboundChance) {
          rebounder = this.calcRebounder(team1);
          this.playerStatTemplate.teamOne[`${rebounder.name}`].rebounds++;
          this.teamStats.teamOne.rebounds++;
          this.addLog('home', `${rebounder.name} grabs offensive rebound.`);
        } else {
          rebounder = this.calcRebounder(team2);
          this.playerStatTemplate.teamTwo[`${rebounder.name}`].rebounds++;
          this.teamStats.teamTwo.rebounds++;
          this.addLog('away', `${rebounder.name} grabs defensive rebound.`);
          this.possession = 1; // Change possession
        }
      } else {
        // Team 2 (Away) is on offense
        const offensiveReboundChance = parseFloat(
          (
            (teamTwoOffRebound * scalingFactor) /
            (teamTwoOffRebound * scalingFactor + teamOneDefRebound)
          ).toFixed(2)
        );

        if (chance < offensiveReboundChance) {
          rebounder = this.calcRebounder(team2);
          this.playerStatTemplate.teamTwo[`${rebounder.name}`].rebounds++;
          this.teamStats.teamTwo.rebounds++;
          this.addLog(
            'away',
            `${rebounder.name} grabs offensive rebound. ${this.gameScore.teamOne}:${this.gameScore.teamTwo}`
          );
        } else {
          rebounder = this.calcRebounder(team1);
          this.playerStatTemplate.teamOne[`${rebounder.name}`].rebounds++;
          this.teamStats.teamOne.rebounds++;
          this.addLog(
            'home',
            `${rebounder.name} grabs defensive rebound. ${this.gameScore.teamOne}:${this.gameScore.teamTwo}`
          );
          this.possession = 0; // Change possession
        }
      }
    },
    calcBlockChance(defender, shooter, shotType) {
      // Defensive stats contributions
      const insideDefenseWeight = 0.5;
      const perimeterDefenseWeight = 0.2; // Smaller weight for perimeter defense
      const verticalWeight = 0.2;
      const heightWeight = 0.1;

      // Defender's effective block ability
      let effectiveDefense =
        defender.attributes.defense.inside_defense * insideDefenseWeight +
        defender.attributes.defense.outside_defense * perimeterDefenseWeight +
        defender.attributes.physical.vertical * verticalWeight +
        defender.height * heightWeight; // Include height advantage

      // Shooter's ability to counter blocks
      const shooterAdvantage = shooter.height * 0.05; // Taller shooters are harder to block

      // Adjust based on shot type
      if (shotType === 'shoot_mid' || shotType === 'shoot_three') {
        effectiveDefense *= 0.7; // Lower block effectiveness for outside shots
      }

      // Global scaling for block chance
      const globalBlockScale = 0.03; // Adjust to target ~3% block rate
      const blockChance =
        (effectiveDefense - shooterAdvantage) * globalBlockScale;

      // Ensure block chance is between 0 and 1
      return Math.max(0, Math.min(blockChance, 0.15));
    },
    calcRebounder(team) {
      let reboundChances = [];
      let totalReboundScore = 0;

      team.forEach((player) => {
        // Adjust rebounding score based on player position
        let reboundScore =
          player.attributes.defense.def_rebound +
          player.attributes.offense.off_rebound;

        // Penalize guards, boost big men
        if (player.position === 'PG' || player.position === 'SG') {
          reboundScore *= 0.7; // Guards get a penalty
        } else if (player.position === 'C' || player.position === 'PF') {
          reboundScore *= 1.3; // Big men get a bonus
        }

        reboundChances.push(reboundScore);
        totalReboundScore += reboundScore;
      });

      // Convert rebound scores to probabilities
      const probabilities = reboundChances.map(
        (score) => score / totalReboundScore
      );

      const chance = Math.random();
      let cumulativeProbability = 0;

      // Determine the rebounder based on probabilities
      for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (chance <= cumulativeProbability) {
          return team[i]; // Return the player who gets the rebound
        }
      }

      return team[team.length - 1]; // Fallback to the last player in case of rounding issues
    },
    logRebounds(string) {
      this.gameLog.unshift(
        string[Math.floor(Math.random() * string.length)] +
          `${this.gameScore.teamOne}:${this.gameScore.teamTwo}`
      );
    },
    calcSteal(offTeam, defTeam) {
      const chance = Math.random().toFixed(2);
      const teamPassingIq = this.calcPassing(offTeam);
      const teamPerimeterDefense = this.calcPerimeterDefense(defTeam);
      const stealChance = parseFloat(
        (
          teamPerimeterDefense / (teamPassingIq + teamPerimeterDefense) -
          0.4
        ).toFixed(2)
      );

      if (chance > stealChance) {
        return false;
      } else {
        return true;
      }
    },
    calcPassing(team) {
      let teamPassing = 0;
      team.forEach((e) => {
        teamPassing +=
          (e.attributes.offense.handles + e.attributes.offense.pass) / 6;
      });

      return parseFloat(teamPassing.toFixed(2));
    },
    calcPerimeterDefense(team) {
      let teamDefense = 0;
      team.forEach((e) => {
        teamDefense +=
          (e.attributes.defense.outside_defense +
            e.attributes.defense.steal +
            e.tendencies.defense.steal +
            e.tendencies.defense.intercept) /
          12;
      });
      return parseFloat(teamDefense.toFixed(2));
    },
    updateScoreAndLog(player, points, type) {
      const isTeamOne = this.possession === 0;

      // Update the respective team stats
      const teamStats = isTeamOne
        ? this.teamStats.teamOne
        : this.teamStats.teamTwo;
      teamStats.points += points;
      teamStats.fgm++;
      teamStats.fga++;
      if (type === 'shoot_three') {
        teamStats.threeA++;
        teamStats.threeM++;
      }

      // Update individual player stats
      const playerStats = isTeamOne
        ? this.playerStatTemplate.teamOne[player.name]
        : this.playerStatTemplate.teamTwo[player.name];
      playerStats.points += points;
      playerStats.fga++;
      playerStats.fgm++;
      if (type === 'shoot_three') {
        playerStats.threeA++;
        playerStats.threeM++;
      }
      const message = `${player.name} scores ${points} points!`;

      // Update game score
      if (isTeamOne) {
        this.gameScore.teamOne += points;
        this.addLog('home', message, true);
        this.possession = 1;
      } else {
        this.gameScore.teamTwo += points;
        this.addLog('away', message, true);
        this.possession = 0;
      }
    },
    updateMissedShotStats(player, type) {
      const message = `${player.name} misses a ${type.replace('_', ' ')}!`;
      const isTeamOne = this.possession === 0; // Determine if possession is with Team One
      const currentPlayerStats = isTeamOne
        ? this.playerStatTemplate.teamOne[player.name]
        : this.playerStatTemplate.teamTwo[player.name];
      const currentTeamStats = isTeamOne
        ? this.teamStats.teamOne
        : this.teamStats.teamTwo;

      // Update missed shot stats
      currentPlayerStats.fga++;
      currentTeamStats.fga++;

      if (type === 'shoot_three') {
        currentPlayerStats.threeA++;
        currentTeamStats.threeA++;
      }
      if (isTeamOne) {
        this.addLog('home', message);
      } else {
        this.addLog('away', message);
      }
    },
    logSteal(stealPlayer, turnoverPlayer) {
      const isTeamOne = this.possession === 0;
      const message = `${stealPlayer.name} stole the ball from ${turnoverPlayer.name}.`;

      if (isTeamOne) {
        this.addLog('home', message);
      } else {
        this.addLog('away', message);
      }
    },
    calcAssist(team, currentPlayer) {
      let assistScores = [];
      let totalAssistScore = 0;

      // Exclude the current player from the assist calculation
      const excludePlayer = team.filter(
        (player) => player.name !== currentPlayer.name
      );

      // Calculate assist scores for each eligible player
      excludePlayer.forEach((player) => {
        const assistScore =
          player.attributes.offense.handles +
          player.attributes.offense.pass +
          player.tendencies.offense.pass;
        assistScores.push(assistScore);
        totalAssistScore += assistScore;
      });

      // Convert assist scores to probabilities
      const probabilities = assistScores.map(
        (score) => score / totalAssistScore
      );

      const chance = Math.random(); // Generate a random number between 0 and 1
      let cumulativeProbability = 0;

      // Determine the assisting player based on the random chance
      for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (chance <= cumulativeProbability) {
          return excludePlayer[i]; // Return the player who makes the assist
        }
      }

      return excludePlayer[excludePlayer.length - 1]; // Fallback to the last eligible player
    },

    assignToTeams(team1, team2) {
      const positionsTeamOne = ['C', 'PF', 'SF', 'SG', 'PG'];
      const positionsTeamTwo = ['C', 'PF', 'SF', 'SG', 'PG'];

      team1.forEach((player, index) => {
        player.position = positionsTeamOne[index % positionsTeamOne.length];
      });
      team2.forEach((player, index) => {
        player.position = positionsTeamTwo[index % positionsTeamTwo.length];
      });

      let teamOne = {};
      let teamTwo = {};

      team1.forEach((player) => {
        teamOne[player.name] = {
          points: 0,
          rebounds: 0,
          assists: 0,
          steals: 0,
          blocks: 0,
          turnovers: 0,
          fgm: 0,
          fga: 0,
          threeA: 0,
          threeM: 0
        };
      });

      team2.forEach((player) => {
        teamTwo[player.name] = {
          points: 0,
          rebounds: 0,
          assists: 0,
          steals: 0,
          blocks: 0,
          turnovers: 0,
          fgm: 0,
          fga: 0,
          threeA: 0,
          threeM: 0
        };
      });
      return { teamOne, teamTwo };
    },
    gameCycle() {
      if (this.possession === null) {
        this.jumpBall();
      }

      let currentPlayer;
      let shotType;
      let matchup;
      let steal;
      if (this.possession === 1) {
        const currentPlayerIndex = this.checkShootPass(this.teams.teamTwo);
        shotType = this.pickTypeOfShot(this.teams.teamTwo[currentPlayerIndex]);
        currentPlayer = this.teams.teamTwo[currentPlayerIndex];
        matchup = this.teams.teamOne[currentPlayerIndex];
        steal = this.calcSteal(this.teams.teamTwo, this.teams.teamOne);
        if (steal === true) {
          this.logSteal(currentPlayer, matchup);
          this.playerStatTemplate.teamTwo[`${currentPlayer.name}`].steals++;
          this.teamStats.teamTwo.steals++;
          this.playerStatTemplate.teamOne[`${matchup.name}`].turnovers++;
          this.teamStats.teamOne.turnovers++;
        }
      } else {
        const currentPlayerIndex = this.checkShootPass(this.teams.teamOne);
        shotType = this.pickTypeOfShot(this.teams.teamOne[currentPlayerIndex]);
        currentPlayer = this.teams.teamOne[currentPlayerIndex];
        matchup = this.teams.teamTwo[currentPlayerIndex];
        steal = this.calcSteal(this.teams.teamOne, this.teams.teamTwo);
        if (steal === true) {
          this.logSteal(currentPlayer, matchup);
          this.playerStatTemplate.teamOne[`${currentPlayer.name}`].steals++;
          this.teamStats.teamOne.steals++;
          this.playerStatTemplate.teamTwo[`${matchup.name}`].turnovers++;
          this.teamStats.teamTwo.turnovers++;
        }
      }

      this.shootBall(currentPlayer, shotType, matchup);
      if (this.gameScore.teamOne < 100 && this.gameScore.teamTwo < 100) {
        setTimeout(this.gameCycle, 50);
        return;
      }
      this.gameInProgress = false;
      this.getTeamById(JSON.parse(localStorage.getItem('team_name')).id);
      this.createGame(this.createGameObject());
      const team = JSON.parse(localStorage.getItem('team_name'));
      this.getUpdatedTeam(team.team_name, team.password);
    },
    async updateTeamById(id, body) {
      const res = await UpdateTeamById(id, body);
      return res;
    },
    async getTeamById(id) {
      const res = await GetTeamById(id);
      this.record = {
        wins: res.wins,
        losses: res.losses
      };
      if (this.gameScore.teamOne >= 21) {
        this.record.wins++;
        this.updateTeamById(id, this.record);
      } else {
        this.record.losses++;
        this.updateTeamById(id, this.record);
      }
    },
    async createGame(obj) {
      const res = await CreateGame(obj);
      return res;
    },
    createGameObject() {
      const obj = {
        name: 'game_name',
        team_one_stats: this.teamStats.teamOne,
        team_two_stats: this.teamStats.teamTwo,
        team_one_player_stats: this.playerStatTemplate.teamOne,
        team_two_player_stats: this.playerStatTemplate.teamTwo,
        team_one_score: this.gameScore.teamOne,
        team_two_score: this.gameScore.teamTwo,
        team_one_squad: this.teams.teamOne,
        team_two_squad: this.teams.teamTwo,
        date: new Date().toLocaleDateString('en-CA')
      };
      return obj;
    }
    // async getUpdatedTeam(team, pw) {
    //   const res = await GetTeamByNameAndPassword(team, pw);
    //   this.$store.commit('setTeam', res);
    // }
  }
};
</script>

<style scoped>
.game-ui {
  font-family: 'Share', cursive;
  background-color: #222;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh; /* Ensure it occupies the full height */
}

.middle-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.team {
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
  width: 45%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.stat-box {
  flex: 8;
  background-color: #444;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  color: white;
}

th,
td {
  padding: 0.3rem;
  border: 1px solid #555;
  font-size: 0.9rem;
}

th {
  background-color: #555;
  color: white;
}

.team-totals {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #555;
  color: white;
  padding: 0.5rem;
  margin-top: 1rem;
  border-top: 2px solid white;
  border-radius: 8px;
  font-weight: bold;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10%;
}

.score {
  font-size: 3rem;
  background-color: #444;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.ball img {
  width: 6rem;
  animation: spin 5s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.log-container {
  display: flex;
  flex-direction: column;
  background-color: #222;
  width: 100%;
  height: 30vh;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  overflow-y: auto;
  border: 1px solid #555;
}

.log-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  height: auto; /* Ensures logs adjust dynamically */
}

.log-entry {
  width: 45%; /* Each log occupies 45% of the row width */
  text-align: left;
}

.log-empty {
  width: 45%; /* Empty space for alignment */
  height: 100%; /* Ensures alignment with other rows */
}

.log-score {
  width: 10%; /* Score occupies the middle 10% */
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
}

.home-log {
  display: flex;
  justify-content: flex-end; /* Align home log text to the right */
  text-align: right;
}

.away-log {
  display: flex;
  justify-content: flex-start; /* Align away log text to the left */
  text-align: left;
}

.team-log {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.home-log .team-log {
  background-color: #333; /* Home log background color */
  color: white;
}

.away-log .team-log {
  background-color: #444; /* Away log background color */
  color: white;
}

.log-score span {
  background-color: transparent; /* No background for the score */
  color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
}

.log-container::-webkit-scrollbar {
  width: 6px;
}

.log-container::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
}

.log-container::-webkit-scrollbar-track {
  background: #222;
}

.restart-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.restart-button {
  background-color: #555;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.restart-button:hover {
  background-color: #777;
}
</style>