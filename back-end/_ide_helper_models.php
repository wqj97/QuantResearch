<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\ProductConfig
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property array $code
 * @property array $config
 * @property int|null $selfSelected
 * @property int|null $deposit
 * @property int|null $amount
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereConfig($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereDeposit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereSelfSelected($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereUserId($value)
 */
	class ProductConfig extends \Eloquent {}
}

namespace App{
/**
 * App\Product
 *
 * @property int $id
 * @property string $name
 * @property float $stableCoefficient
 * @property array $code
 * @property array $names
 * @property array $product1_month
 * @property array $product2_month
 * @property array $openPosition
 * @property array $unit
 * @property string|null $func
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereFunc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereNames($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOpenPosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereProduct1Month($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereProduct2Month($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStableCoefficient($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereUpdatedAt($value)
 */
	class Product extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $api_token
 * @property string|null $phone
 * @property string $head
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read \App\ProductConfig $product_config
 * @property-read \App\ProductConfig $self_selected
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Query\Builder|\App\User onlyTrashed()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereApiToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereHead($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\User withoutTrashed()
 */
	class User extends \Eloquent {}
}

