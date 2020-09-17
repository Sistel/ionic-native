import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export enum BatteryStatusEnum {
  Unknown = 1,
  Charging = 2,
  Discharging = 3,
  NotCharging = 4,
  Full = 5,
}

export interface BatteryStatusResponse {
  /**
   * The battery charge percentage
   */
  level: number;

  /**
   * A boolean that indicates whether the device is plugged in
   */
  isPlugged: boolean;
}

export interface BatteryStatusData {
  /**
   * The battery charge percentage
   */
  level: number;

  /**
   * A boolean that indicates whether the device is plugged in
   */
  isPlugged: boolean;

  /**
   * A enum that indicates the status o f the battery, see BatteryStatusEnum
   */
  status: BatteryStatusEnum;
}
/**
 * @name Battery Status
 * @description
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * @usage
 * ```typescript
 * import { BatteryNotification } from '@ionic-native/battery-notification/ngx';
 *
 * constructor(private batteryNotification: BatteryNotification) { }
 *
 * ...
 *
 *
 * // watch change in battery status
 * const subscription = this.batteryNotification.onChange().subscribe(status => {
 *    console.log(status.level, status.isPlugged);
 * });
 *
 * // stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * BatteryStatusResponse
 */
@Plugin({
  pluginName: 'BatteryNotification',
  plugin: 'cordova-plugin-battery-notification',
  pluginRef: 'navigator.batterynotification',
  repo: 'https://github.com/apache/cordova-plugin-battery-status',
  platforms: ['iOS', 'Android', 'Windows', 'Browser'],
})
@Injectable()
export class BatteryNotification extends IonicNativePlugin {
  /**
   * Watch the change in battery level
   * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
   */
  @Cordova({
    eventObservable: true,
    event: 'batterynotification',
  })
  onChange(): Observable<BatteryStatusResponse> {
    return;
  }

  /**
   * Checks if device is charging.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isCharging(): Promise<boolean> {
    return;
  }

  /**
   * Get the data battery info
   * @returns {Promise<BatteryStatusData>}
   */
  @Cordova({ platforms: ['Android'] })
  getDataBatteryInfo(): Promise<BatteryStatusData> {
    return;
  }

  /**
   * Start battery service
   * @returns void
   */
  @Cordova({ platforms: ['Android'] })
  startService(minLevel: number, message: string): void {
    return;
  }

  /**
   * Stop battery service
   * @returns void
   */
  @Cordova({ platforms: ['Android'] })
  stopService(): void {
    return;
  }
}
